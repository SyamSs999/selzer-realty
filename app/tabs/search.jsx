import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Colors } from "./../../constants/Colors";

export default function Search() {
  return (
    <View style={{ paddingTop: 60, paddingLeft: 20, paddingRight: 20 }}>
      <TouchableOpacity
        style={{
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: Colors.BLACK,
          borderRadius: 15,
          height: 60,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 10,
          paddingRight: 10,
          gap: 10,
        }}
      >
        <TextInput
          placeholder="Search"
          placeholderTextColor={Colors.BLACK}
          autoFocus
          style={{
            flexGrow: 1,
            height: "100%",
            fontSize: 16,
            color: "#000",
          }}
        />
        <EvilIcons
          name="search"
          style={{ lineHeight: 30 }}
          size={30}
          color={Colors.BLACK}
        />
      </TouchableOpacity>
    </View>
  );
}
