import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import LandingScreen from "./app/components/LandingScreen";
import Toast from "react-native-toast-message";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./app/navigation/RootStackNavigator";
import UserProfile from "./app/components/user/UserProfile";
import { Provider } from "react-redux";
import store from "./app/redux/store";
import { toastConfig } from "./app/helpers/ToastConfiguration";
import AuthScreen from "./app/components/auth/AuthScreen";
import { NativeBaseProvider } from "native-base";

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
    <Provider store={store}>
      <NativeBaseProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <AuthScreen />
          <Toast config={toastConfig} />
        </NavigationContainer>
        <StatusBar style="auto" />
        </View>
        </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // height: "100%",
    marginTop: 5,
  },
});
