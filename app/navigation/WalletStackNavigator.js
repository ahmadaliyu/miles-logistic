import * as React from "react";
import { TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BackArrow from "../../assets/icons/back-arrow.svg";
import Avatar from "../../assets/images/avatar.svg";
import UserHome from "../components/user/UserHome";
import AppHeader from "../reusables/AppHeader";
import Wallet from "../components/user/Wallet";

const Stack = createStackNavigator();

const WalletStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="wallet"
        component={Wallet}
        options={{
          header: ({ navigation }) => <AppHeader title={""} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default WalletStackNavigator;
