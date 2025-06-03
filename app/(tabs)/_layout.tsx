import {
  View,
  Text,
  ImageBackground,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants/icons";

const tabs = [
  {
    title: "Home",
    name: "index",
    icon: icons.home,
  },
  {
    title: "Search",
    name: "search",
    icon: icons.search,
  },
  {
    title: "Profile",
    name: "profile",
    icon: icons.person,
  },
  {
    title: "Saved",
    name: "saved",
    icon: icons.save,
  },
];

interface TabIconProps {
  focused: boolean;
  title: string;
  icon: ImageSourcePropType;
}

const TabIcon = ({ title, icon, focused }: TabIconProps) => {
  return (
    <View
      className={`flex flex-row items-center justify-center gap-1 rounded-full w-full flex-1 min-w-[130px] min-h-16 mt-4 ${
        focused ? "bg-accent shadow" : "text-dark-300"
      }`}
    >
      <Image source={icon} tintColor={focused ? "#151312" : "#9ca4ab"} className="size-5" />
      {focused && <Text>{title}</Text>}
    </View>
  );
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0d23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0d23",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <TabIcon title={tab.title} icon={tab.icon} focused={focused} />
              );
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default _Layout;
