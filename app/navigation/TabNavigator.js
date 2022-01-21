import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppSVG from "../reusables/AppSVG";
import HomeIcon from "../../assets/icons/home.svg";
import WalletIcon from "../../assets/icons/wallet.svg";
import AccountIcon from "../../assets/icons/account.svg";
import HomeStackNavigator from "./HomeStackNavigator";
import AccountStackNavigator from "./AccountStackNavigator";
import Colors from "../utils/Colors";
import WalletStackNavigator from "./WalletStackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#F2F2F2",
        tabBarInactiveTintColor: "#6A89C8",
        tabBarActiveBackgroundColor: "#F2F8E7",
        tabBarInactiveBackgroundColor: "#FFFFFF",
        tabBarItemStyle: { backgroundColor: Colors.primary },
        tabBarLabelStyle: {
          fontFamily: "NSB",
          fontSize: 13,
        },
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent;

          if (route.name === "Home") {
            IconComponent = HomeIcon;
          } else if (route.name === "Wallet") {
            IconComponent = WalletIcon;
          } else if (route.name === "Account") {
            IconComponent = AccountIcon;
          }

          return (
            <View>
              <AppSVG width={22} height={22} svgName={IconComponent} />
            </View>
          );
        },
      })}
      shifting={true}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Wallet" component={WalletStackNavigator} />
      <Tab.Screen name="Account" component={AccountStackNavigator} />
      {/* <Tab.Screen
        name=""
        component={}
        listeners={{
          tabPress: (e) => {
            formatToast("Currently not available", "info");
            e.preventDefault();
          },
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
