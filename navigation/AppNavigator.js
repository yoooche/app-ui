import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../src/home/LoginScreen";
import HomePage from "../src/home/HomePage";

export default function AppNavigator() {
  const rootStack = createStackNavigator();
  return (
    <NavigationContainer>
      <rootStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <rootStack.Screen
          name="Index"
          component={HomePage}
          options={{ title: "首頁" }}
        />
        <rootStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "登入" }}
        />
      </rootStack.Navigator>
    </NavigationContainer>
  );
}
