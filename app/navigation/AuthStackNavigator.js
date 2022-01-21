import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateAccount from "../components/auth/CreateAccount";
import BackArrow from "../../assets/icons/back-arrow.svg";
import Brand from "../../assets/images/logo.svg";
import AppHeader from "../reusables/AppHeader";
import Login from "../components/auth/Login";
import UserHome from "../components/user/UserHome";

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerMode: "screen", headerShown: false }}
      presentation="modal"
    >
      <Stack.Screen
        options={({ navigation }) => ({
          headerShown: true,
          header: () => (
            <AppHeader
              title={"Create Account"}
              headerImage={Brand}
              onPressLeft={() => navigation.goBack()}
            />
          ),
        })}
        name="create-account"
        component={CreateAccount}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerShown: true,
          header: () => (
            <AppHeader
              title={"Create Account"}
              headerImage={Brand}
              leftButton={BackArrow}
              onPressLeft={() => navigation.goBack()}
            />
          ),
        })}
        name="login"
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
