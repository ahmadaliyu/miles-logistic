import * as React from "react";
import { TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BackArrow from "../../assets/icons/back-arrow.svg";
import BellIcon from "../../assets/icons/notification-icon.svg";
import UserHome from "../components/user/UserHome";
import Map from "../components/Map";
import AppHeader from "../reusables/AppHeader";
import AppSVG from "../reusables/AppSVG";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="user-home"
        component={UserHome}
        options={{
          header: ({ navigation }) => (
            <AppHeader
              // pt="10%"
              // leftButton={BackArrow}
              rightButton={BellIcon}
              title={""}
            />
          ),
        }}
      />
      <Stack.Screen
        name="order-shipment"
        component={UserHome}
        options={{
          header: ({ navigation }) => (
            <AppHeader pt="10%" title={"Order a shipment"} />
          ),
        }}
      />
      <Stack.Screen
        name="maps"
        component={Map}
        options={{
          header: ({ navigation }) => <AppHeader pt="1%" title={""} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
