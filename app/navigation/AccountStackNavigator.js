import * as React from "react";
import { TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BackArrow from "../../assets/icons/back-arrow.svg";
import Avatar from "../../assets/images/avatar.svg";
import UserHome from "../components/user/UserHome";
import AppHeader from "../reusables/AppHeader";
import UserProfile from "../components/user/UserProfile";

const Stack = createStackNavigator();

const AccountStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Home"
        component={UserProfile}
        options={{
          header: ({ navigation }) => (
            <AppHeader
              //   RightButton={
              //     <TouchableOpacity onPress={() => {}}>
              //       <Image source={} style={{ height: 35, width: 35, borderRadius: 17.5 }} />
              //     </TouchableOpacity>
              //   }
              title={"Profile"}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountStackNavigator;
