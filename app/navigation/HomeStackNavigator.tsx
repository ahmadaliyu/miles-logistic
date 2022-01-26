import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserHome from "../components/user/UserHome";
import Map from "../components/Map";
import AppHeader from "../reusables/AppHeader";
import Ionicons from "react-native-vector-icons/Ionicons";
import OrderShipment from "../components/user/OrderShipment";

interface PROPS{
  navigation: any
}


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
          header: ({ navigation } : PROPS) => (
            <AppHeader pt="10%" onPressLeft={() => navigation.openDrawer()} iconLeft={<Ionicons name="menu" size={30} />} />
          ),
        }}
      />
      <Stack.Screen
        name="order-shipment"
        component={OrderShipment}
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
