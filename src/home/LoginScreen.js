import {
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Text,
  Switch,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";

export default function LoginScreen() {
  let userObject = {
    account: "",
    password: "",
    rememberMe: false,
  };

  const [loginInfo, setLoginInfo] = useState(userObject);

  return (
    <ScrollView className="flex-1" style={styles.container}>
      <View className="items-center justify-top">
        <Image
          source={require("../../img/tableLogo.png")}
          resizeMode="contain"
          style={styles.logo}
          className="mt-10"
        />
        <Text className="font-bold text-white text-4xl my-6 italic">
          PolyBrain
        </Text>
        <View className="my-3 w-10/12">
          <TextInput
            value={loginInfo.account}
            onChangeText={(text) =>
              setLoginInfo({ ...loginInfo, account: text })
            }
            placeholder={"email"}
            className="px-3 py-2 border border-blue-300 rounded-md bg-blue-50"
          />
        </View>
        <View className="my-3 w-10/12">
          <TextInput
            value={loginInfo.password}
            onChangeText={(text) =>
              setLoginInfo({ ...loginInfo, password: text })
            }
            placeholder={"password"}
            secureTextEntry={true}
            className="px-3 py-2 border border-blue-300 rounded-md bg-blue-50"
          />
        </View>
        <View className="flex-row my-5">
          <Switch
            value={loginInfo.rememberMe}
            onValueChange={(value) => {
              setLoginInfo({ ...loginInfo, rememberMe: value });
            }}
          />
          <Text className="pt-3 pl-5 text-white">remember me</Text>
        </View>
        <TouchableOpacity
          className="bg-indigo-700 rounded-lg my-3"
          onPress={onLogin}
        >
          <Text className="text-white text-xl px-5 py-3">Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  function onLogin() {
    if (loginInfo.account === "" || loginInfo.password === "") {
      Alert.alert("Please enter email and password");
      return false;
    } else {
      Alert.alert("Login success");
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B0841",
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
});
