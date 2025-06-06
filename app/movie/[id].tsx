import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import useFetch from "@/hooks/useFetch";
import { router, useLocalSearchParams } from "expo-router";
import { fetchMovieDetails } from "@/services/api";
import { icons } from "@/constants/icons";
import { LinearGradient } from "expo-linear-gradient";

interface MovieInfoProps {
  label: string;
  value?: string | number;
}

const MovieInfo = ({ label, value }: MovieInfoProps) => {
  return (
    <View className="flex-col items-start justify-center mt-5">
      <Text className="text-light-200 font-normal text-sm">{label}</Text>
      <Text className="text-light-100 font-bold test-sm mt-2">
        {value || "N/A"}
      </Text>
    </View>
  );
};

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const { data: movie } = useFetch(() => fetchMovieDetails(id as string));

  return (
    <View className="bg-primary flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      >
        {/* Top Gradient Overlay */}
        <LinearGradient
          colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0)"]}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 100, // adjust as needed
            zIndex: 10,
          }}
        />
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
          <View className="flex-col items-start justify-center mt-5 px-5">
            <Text className="text-white font-bold text-xl">{movie?.title}</Text>
            <View className="flex-row items-center gap-x-1 mt-2">
              <Text className="text-light-200 text-sm">
                {movie?.release_date?.split("-")[0]}
              </Text>
              <Text className="text-light-200 text-sm">{movie?.runtime}</Text>
            </View>

            <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-2 mt-2">
              <Image source={icons.star} className="size-4" />
              <Text className="text-white font-bold text-sm">
                {Math.round(movie?.vote_average ?? 0)} / 10
              </Text>
              <Text className="text-light-200 text-sm">
                {movie?.vote_count} Votes
              </Text>
            </View>
            <MovieInfo label="Overview" value={movie?.overview} />
            <MovieInfo
              label="Genres"
              value={
                movie?.genres
                  ?.map((g: { name: string }) => g.name)
                  .join(" - ") || "N/A"
              }
            />
            <View className="flex flex-row justify-between w-1/2">
              <MovieInfo
                label="Budget"
                value={`${movie?.budget / 1_000_000} million`}
              />
              <MovieInfo
                label="Revenue"
                value={`${movie?.revenue / 1_000_000} million`}
              />
            </View>
            <MovieInfo
              label="Production Companies"
              value={
                movie?.production_companies
                  ?.map((c: { name: string }) => c.name)
                  .join(" - ") || "N/A"
              }
            />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={router.back}
        className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50"
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5 rotate-180"
          tintColor="#fff"
        />

        <Text className="text-white font-semibold text-base">Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;
