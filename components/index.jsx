import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { GlobalStyles } from "@/constants/GlobalStyles";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("./../assets/images/splash-banner.jpg")}
      style={{ width: "100%", height: "100%", position: "relative", zIndex: 0 }}
    >
      <Text style={styles.before}>&nbsp;</Text>
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <Image
          style={{ width: 284, height: 200 }}
          source={require("./../assets/images/splash-screen-logo.png")}
        />
      </View>
      <TouchableOpacity
        style={{
          margin: "auto",
          marginBottom: 58,
          zIndex: 2,
          borderRadius: 5,
          overflow: "hidden",
        }}
        onPress={() => router.push("auth/login")}
      >
        <Text style={GlobalStyles.btn}>let's start</Text>
      </TouchableOpacity>
      <Image
        source={require("./../assets/images/fader.png")}
        style={styles.after}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  before: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    height: "100%",
    width: "100%",
  },
  after: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "69%",
    width: "100%",
    zIndex: 0,
  },
});
