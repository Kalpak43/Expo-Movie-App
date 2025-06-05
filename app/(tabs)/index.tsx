import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import Searchbar from "@/components/searchbar";
import { useRouter } from "expo-router";
import useFetch from "@/hooks/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/movie-card";
import { getTrendingMovies } from "@/services/appwrite";
import TrendingCard from "@/components/trending-card";

const Index = () => {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({}));

  return (
    <View className="bg-primary flex-1">
      <Image source={images.bg} className="absolute inset-0 z-0 w-full" />
      {/* <Text>Index</Text> */}

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {moviesLoading || trendingLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : moviesError || trendingError ? (
          <Text>Error: {moviesError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <Searchbar
              onPress={() => {
                router.push("/search");
              }}
              placeHolder="Search for a Movie"
            />

            {trendingMovies && (
              <View className="mt-10">
                <Text className="text-lg text-white font-bold mt-3">
                  Trending Movies
                </Text>

                <FlatList
                  horizontal
                  // showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => <View className="w-10" />}
                  data={trendingMovies}
                  renderItem={({ item, index }) => {
                    // Map Document to TrendingMovie
                    const trendingMovie = {
                      SEARCH_TERM: item.SEARCH_TERM,
                      MOVIE_ID: item.MOVIE_ID,
                      TITLE: item.TITLE,
                      COUNT: item.COUNT,
                      POSTER_URL: item.POSTER_URL,
                    };
                    return <TrendingCard movie={trendingMovie} index={index} />;
                  }}
                  keyExtractor={(item, index) => item.MOVIE_ID + index}
                  // numColumns={3}
                  // columnWrapperStyle={{
                  //   justifyContent: "flex-start",
                  //   gap: 20,
                  //   paddingRight: 5,
                  //   paddingBottom: 10,
                  // }}
                  className="mt-3 mb-4 pb-3"
                />
              </View>
            )}

            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>
              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  paddingBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Index;
