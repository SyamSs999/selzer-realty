import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function RootLayout() {
  useFonts({
    DMSans: require("./../assets/fonts/DMSans-Regular.ttf"),
    "DMSans-medium": require("./../assets/fonts/DMSans-Medium.ttf"),
    "DMSans-semibold": require("./../assets/fonts/DMSans-SemiBold.ttf"),
    "DMSans-bold": require("./../assets/fonts/DMSans-Bold.ttf"),
  });

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="tabs" />
    </Stack>
  );
}
