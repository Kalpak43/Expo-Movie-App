import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface SearchbarProps {
  onPress: () => void;
  placeHolder: string;
  value: string;
  onChange: (text: string) => void;
}

const Searchbar = ({
  onPress,
  placeHolder,
  value,
  onChange,
}: SearchbarProps) => {
  return (
    <View className="flex-row items-center bg-dark-200 w-full rounded-full px-6 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab85ff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeHolder}
        value={value}
        onChangeText={onChange}
        placeholderTextColor="#a8b5ff"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default Searchbar;
