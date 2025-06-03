import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import Searchbar from "@/components/searchbar";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

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

        <View className="flex-1 mt-5">
          <Searchbar
            onPress={() => {
              router.push("/search");
            }}
            placeHolder="Search for a Movie"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;
