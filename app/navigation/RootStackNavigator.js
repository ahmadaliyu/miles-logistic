import React from "react";
import LandingOverview from "../components/LandingOverview";
import LandingScreen from "../components/LandingScreen";
import { createStackNavigator } from "@react-navigation/stack";
import BackArrow from "../../assets/icons/back-arrow.svg";
import Brand from "../../assets/images/logo.svg";
import AppHeader from "../reusables/AppHeader";
import AuthStackNavigator from "./AuthStackNavigator";
import UserHome from "../components/user/UserHome";
import UserProfile from "../components/user/UserProfile";
import TabNavigator from "./TabNavigator";
import RouteModal from "../components/RouteModal";

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const RootStackNavigator = () => {
  const transparentModalOptions = {
    cardStyle: { backgroundColor: "transparent" },
    headerShown: false,
    cardStyleInterpolator: ({ current: { progress } }) => ({
      cardStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 0.5, 0.9, 1],
          outputRange: [0, 0.25, 0.7, 1],
        }),
      },
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 15],
          outputRange: [0, 0.5],
          extrapolate: "clamp",
        }),
      },
    }),
  };
  return (
    <Stack.Navigator
      screenOptions={{ headerMode: "screen", headerShown: false }}
      presentation="modal"
    >
      <Stack.Screen
        options={({ navigation }) => ({})}
        name="landing-overview"
        component={LandingOverview}
      />
      <Stack.Screen
        options={({ navigation }) => ({})}
        name="Tab"
        component={TabNavigator}
      />
      <Stack.Screen
        name="routeModal"
        component={RouteModal}
        options={transparentModalOptions}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
