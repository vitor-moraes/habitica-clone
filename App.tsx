import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./src/Hooks/useCachedResources";
import Routes from "./src/Navigation/routes";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Routes />
        <StatusBar backgroundColor="#8400ff" style="light" translucent={true} />
      </SafeAreaProvider>
    );
  }
}
