import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserHome from '../components/user/UserHome'
import Map from '../components/Map'
import AppHeader from '../reusables/AppHeader'
import Ionicons from 'react-native-vector-icons/Ionicons'
import OrderShipment from '../components/user/OrderShipment'
import Companies from '../components/logistics/Companies'
import RequestDetails from '../components/logistics/RequestDetails'
import AppText from '../reusables/AppText'
import BackArrow from '../../assets/icons/back-arrow.svg'
import Colors from '../utils/Colors'

interface PROPS {
  navigation: any
}

const Stack = createStackNavigator()

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
          header: ({ navigation }: PROPS) => (
            <AppHeader
              pt="10%"
              onPressLeft={() => navigation.openDrawer()}
              iconLeft={<Ionicons name="menu" size={30} />}
            />
          ),
        }}
      />
      <Stack.Screen
        name="order-shipment"
        component={OrderShipment}
        options={{
          header: ({ navigation }) => (
            <AppHeader pt="10%" title={'Order a shipment'} />
          ),
        }}
      />
      <Stack.Screen
        name="maps"
        component={Map}
        options={{
          header: ({ navigation }: PROPS) => <AppHeader pt="1%" title={''} />,
        }}
      />
      <Stack.Screen
        name="companies"
        component={Companies}
        options={{
          header: ({ navigation }: PROPS) => <AppHeader pt="1%" />,
        }}
      />
      <Stack.Screen
        name="requestDetails"
        component={RequestDetails}
        options={{
          headerShown: true,
          header: ({ navigation }: PROPS) => (
            <AppHeader
              // title="Request Details"
              pt="10%"
              // leftButton={BackArrow}
              iconLeft={
                <Ionicons
                  name="return-up-back"
                  size={40}
                  color={Colors.orange}
                />
              }
              onPressLeft={() => navigation.goBack()}
              fontFamily="NR"
            />
          ),
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator
