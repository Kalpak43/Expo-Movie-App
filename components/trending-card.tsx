import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

import MaskedView from "@react-native-masked-view/masked-view";
import { images } from "@/constants/images";

const TrendingCard = ({ movie, index }: TrendingCardProps) => {
  return (
    <Link href={`/movie/${movie.MOVIE_ID}`} asChild>
      <TouchableOpacity className="w-32 relative pl-5">
        <Image
          source={{
            uri: movie.POSTER_URL,
          }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />
        <View className="absolute bottom-9 -left-2 px-2 py-1 rounded-full">
          <MaskedView
            maskElement={
              <Text className="font-bold text-white text-6xl">{index + 1}</Text>
            }
          >
            <Image
              source={images.rankingGradient}
              className="size-14"
              resizeMode="cover"
            />
          </MaskedView>
        </View>
        <Text
          className="text-sm font-bold mt-2 text-light-200"
          numberOfLines={1}
        >
          {movie.TITLE}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
