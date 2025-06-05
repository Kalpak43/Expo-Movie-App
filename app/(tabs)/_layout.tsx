import { View, Text, Image, ImageSourcePropType } from "react-native";
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
  // {
  //   title: "Saved",
  //   name: "saved",
  //   icon: icons.save,
  // },
  // {
  //   title: "Profile",
  //   name: "profile",
  //   icon: icons.person,
  // },
];

interface TabIconProps {
  focused: boolean;
  title: string;
  icon: ImageSourcePropType;
}

const TabIcon = ({ title, icon, focused }: TabIconProps) => {
  return (
    <View
      className={`flex flex-col items-center justify-center rounded-full w-full flex-1 min-w-28 min-h-16 mt-4 px-2 ${
        focused ? "bg-accent shadow" : "text-dark-300"
      }`}
    >
      <Image
        source={icon}
        tintColor={focused ? "#151312" : "#9ca4ab"}
        className="size-5"
      />
      {focused && <Text className="text-xs">{title}</Text>}
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
          maxWidth: 240,
          alignSelf: "center",
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
