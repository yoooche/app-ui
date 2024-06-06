import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import LoginScreen from "./src/home/LoginScreen";
import AppNavigator from "./navigation/AppNavigator";
import AuditState from "./context/AuthState";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="dark-content" />
      <AuditState>
        <AppNavigator />
      </AuditState>
    </SafeAreaView>
  );
}
