import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../src/home/LoginScreen";
import HomePage from "../src/home/HomePage";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthState";

export default function AppNavigator() {
  const RootStack = createStackNavigator();
  const { isLogin } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login">
        {isLogin ? (
          <RootStack.Screen
            name="Index"
            component={HomePage}
            options={{ title: "首頁" }}
          />
        ) : (
          <RootStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "登入" }}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
