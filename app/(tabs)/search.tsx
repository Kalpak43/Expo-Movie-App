import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { images } from "@/constants/images";
import useFetch from "@/hooks/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/movie-card";
import Searchbar from "@/components/searchbar";
import { icons } from "@/constants/icons";
import { updateSearchCount } from "@/services/appwrite";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: loadMovies,
    reset,
  } = useFetch(
    () =>
      fetchMovies({
        query: searchQuery,
      }),
    false
  );

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        loadMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  useEffect(() => {
    if (movies?.length > 0 && movies?.[0]) {
      updateSearchCount({
        query: searchQuery,
        movie: movies[0],
      });
    }
  }, [movies]);

  return (
    <View className="bg-primary flex-1">
      <Image source={images.bg} className="absolute inset-0 z-0 w-full" />

      <View className="flex-1 px-5">
        {/* Fixed Header */}
        <View className="w-full flex-row justify-center mt-20">
          <Image source={icons.logo} className="w-12 h-10 mb-5 mx-auto" />
        </View>
        <View className="my-5">
          <Searchbar
            onPress={() => {
              // router.push("/search");
            }}
            placeHolder="Search for a Movie"
            value={searchQuery}
            onChange={(text: string) => {
              setSearchQuery(text);
            }}
          />
        </View>

        {!moviesLoading &&
          !moviesError &&
          searchQuery.trim() &&
          movies?.length > 0 && (
            <Text className="text-xl text-white font-bold mb-5">
              Search Results for{" "}
              <Text className="text-accent">{searchQuery}</Text>
            </Text>
          )}

        {/* Scrollable List */}
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
          className="pb-32"
          ListEmptyComponent={
            !moviesLoading && !moviesError ? (
              <View className="mt-10 px-5">
                <Text className="text-center text-gray-500">
                  {searchQuery.trim() ? "No Movie Found" : "Search For a Movie"}
                </Text>
              </View>
            ) : null
          }
          ListFooterComponent={<View className="py-16" />}
        />
      </View>
    </View>
  );
};

export default Search;
