import { View, Text, Image, ImageSourcePropType, StatusBar } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants/icons";
import { BlurView } from "expo-blur";

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
        focused ? "text-dark-300 shadow" : "text-dark-300"
      }`}
    >
      <Image
        source={icon}
        tintColor={focused ? "#ab8bff" : "#9ca4ab"}
        className="size-6"
      />
      {focused && (
        <Text
          className={`text-sm ${focused ? "text-accent" : "text-dark-300"}`}
        >
          {title}
        </Text>
      )}
    </View>
  );
};

const _Layout = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
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
            position: "absolute",
            backgroundColor: "#0f0d23",
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
            // borderRadius: 50,
            // marginHorizontal: 20,
            // marginBottom: 36,
            height: 80,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: "#0f0d23",
            // maxWidth: 240,
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
                  <TabIcon
                    title={tab.title}
                    icon={tab.icon}
                    focused={focused}
                  />
                );
              },
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default _Layout;
