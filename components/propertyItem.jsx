import { View, Text, Image } from "react-native";
import React from "react";

export default function PropertyItem({ item }) {
  const { previewPicture } = item;
  return (
    <View>
      <Image source={previewPicture} />
    </View>
  );
}
