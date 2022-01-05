import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import LandingScreen from "./app/components/LandingScreen";
import { useState } from "react";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    NB: require("./assets/fonts/NexaXBold.otf"),
    NR: require("./assets/fonts/NexaRegular.otf"),
    NSB: require("./assets/fonts/NexaBold.otf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState();

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
  return (
    <View style={styles.container}>
      <LandingScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    margin: 20,
  },
});
