import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { GlobalStyles } from "@/constants/GlobalStyles";
import { Colors } from "@/constants/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = () => {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      style={{ backgroundColor: "#ffffff", height: "100%" }}
    >
      <Image
        style={{ width: "100%", height: 375 }}
        source={require("./../../assets/images/login-banner.jpg")}
      />
      <View
        style={{
          padding: 25,
          paddingTop: 50,
          marginTop: -25,
          backgroundColor: Colors.WHITE,
          borderRadius: 25,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "DMSans-medium",
            marginBottom: 20,
          }}
        >
          Let’s <Text style={{ fontFamily: "DMSans-bold" }}>Sign In</Text>
        </Text>
        <View style={styles.formGroup}>
          <Image source={require("./../../assets/images/email-icon.png")} />
          <TextInput
            style={{
              flexGrow: 1,
              maxWidth: 285,
              height: 70,
              fontFamily: "DMSans-medium",
            }}
            placeholderTextColor="#000"
            placeholder="Email"
          />
        </View>
        <View style={styles.formGroup}>
          <Image source={require("./../../assets/images/password-icon.png")} />
          <TextInput
            style={{
              flexGrow: 1,
              maxWidth: 285,
              height: 70,
              fontFamily: "DMSans-medium",
            }}
            placeholderTextColor="#000"
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity>
            <Text style={{ fontFamily: "DMSans-semibold", fontSize: 14 }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontFamily: "DMSans-semibold", fontSize: 14 }}>
              Show password
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() =>
            ToastAndroid.show(
              "Please Enter Email and Password",
              ToastAndroid.LONG
            )
          }
          style={{ marginTop: 30, borderRadius: 5, overflow: "hidden" }}
        >
          <Text style={GlobalStyles.btn}>Login</Text>
        </TouchableOpacity>
        <View
          style={{
            fontFamily: "DMSans",
            fontSize: 14,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            textAlign: "center",
            gap: 5,
          }}
        >
          <Text style={{ fontFamily: "DMSans", fontSize: 14 }}>
            Don’t have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("auth/register")}>
            <Text style={{ fontFamily: "DMSans-bold", fontSize: 14 }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 40,
          }}
          onPress={() => {
            router.replace("tabs/home");
          }}
        >
          <Text style={{ fontFamily: "DMSans-bold", textAlign: "center" }}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  formGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    backgroundColor: "#F5F4F8",
    height: 70,
    width: "100%",
    borderRadius: 10,
    padding: 20,
    overflow: "hidden",
    marginBottom: 25,
  },
});
