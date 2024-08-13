import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "../../constants/Colors";
import propertyData from "./../../properties-list.json";
import PropertyItem from "../../components/propertyItem";

export default function Home() {
  const router = useRouter();
  return (
    <View
      style={{
        paddingTop: 60,
        paddingLeft: 20,
        paddingRight: 20,
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 15,
        }}
      >
        <View
          style={{
            backgroundColor: "#f5f5f5",
            borderRadius: 25,
            height: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10,
            gap: 10,
            flexGrow: 1,
          }}
        >
          <EvilIcons
            name="search"
            style={{ lineHeight: 26 }}
            size={26}
            color={Colors.BLACK}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={Colors.BLACK}
            style={{
              flexGrow: 1,
              height: "100%",
              fontSize: 14,
              color: "#000",
              fontFamily: "DMSans-medium",
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <MaterialCommunityIcons name="map-outline" size={24} color="black" />
          <Text style={{ fontFamily: "DMSans-semibold" }}>Map</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={propertyData.listings.slice(0, 1)}
        renderItem={({ item }) => <PropertyItem item={item} />}
      />
    </View>
  );
}
