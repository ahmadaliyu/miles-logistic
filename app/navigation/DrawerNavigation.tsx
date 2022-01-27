import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer'
import HomeStackNavigator from './HomeStackNavigator'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Colors from '../utils/Colors'
import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import AppText from '../reusables/AppText'
import WalletStackNavigator from './WalletStackNavigator'
import UserProfile from '../components/Profile'
import Notifications from '../components/Notification'
import History from '../components/History'
import Settings from '../components/Settings'
import { Divider, NativeBaseProvider } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator()
const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

const CustomDrawerContent = (props: any, header: any) => {
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1 }}>
        <View style={{ height: HEIGHT / 4, backgroundColor: '#243447' }}>
          <View
            style={{
              marginTop: '10%',
              marginHorizontal: '3%',
              marginLeft: '8%',
            }}
          >
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginVertical: '2%',
              }}
              source={require('../../assets/images/n.jpg')}
            />
            <AppText
              title={'Ahmad'.toUpperCase()}
              color={Colors.lighter}
              mt="5%"
            />
            <AppText
              title={'aliyuahmad1996@gmail.com'}
              fontSize={14}
              mt="1%"
              color={'rgba(242, 242, 242, 0.2)'}
              fontFamily="NSB"
            />
          </View>
        </View>
        <Divider
          thickness={0.3}
          backgroundColor={Colors.cloudWhite}
          orientation="horizontal"
        />
        <DrawerContentScrollView
          contentContainerStyle={{}}
          showsVerticalScrollIndicator={true}
          style={{ backgroundColor: '#243447', paddingHorizontal: '3%' }}
          {...props}
        >
          <DrawerItemList {...props} />
          <DrawerItem
            style={{ marginTop: '5%' }}
            label="Log out"
            labelStyle={{
              color: '#fff',
              fontFamily: 'NR',
              fontSize: 17,
              paddingVertical: 15,
            }}
            icon={({ focused, color, size }) => (
              <Ionicons
                color={Colors.default}
                size={25}
                name={'log-out-outline'}
              />
            )}
            onPress={() => {}}
          />
        </DrawerContentScrollView>
        <Divider
          backgroundColor={Colors.cloudWhite}
          thickness={0.3}
          orientation="horizontal"
        />

        <View
          style={{
            backgroundColor: '#243447',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: HEIGHT / 40,
          }}
        >
          <TouchableOpacity activeOpacity={0.7} style={{ marginLeft: '8%' }}>
            <Ionicons color={Colors.default} size={25} name={'sunny-outline'} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={{ marginRight: '8%' }}>
            <Ionicons
              color={Colors.default}
              size={25}
              name={'qr-code-outline'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  )
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'rgba(242, 242, 242, 0.2)',
        drawerStyle: { width: WIDTH * 0.9 },
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, focused, size }) => (
            <Ionicons color={Colors.default} size={25} name={'home-outline'} />
          ),
          drawerLabel: 'Home',
          drawerLabelStyle: {
            fontFamily: 'NR',
            fontSize: 18,
            color: '#F2F2F2',
            marginTop: 2,
          },
        }}
        name="Home"
        component={HomeStackNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, focused, size }) => (
            <Ionicons
              color={Colors.default}
              size={25}
              name={'person-outline'}
            />
          ),
          drawerLabel: 'Profile',
          drawerLabelStyle: {
            fontFamily: 'NR',
            fontSize: 18,
            color: '#F2F2F2',
            marginTop: 5,
          },
        }}
        name="profile"
        component={UserProfile}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, focused, size }) => (
            <Ionicons
              color={Colors.default}
              size={25}
              name={'notifications-outline'}
            />
          ),
          drawerLabel: 'Notifications',
          drawerLabelStyle: {
            fontFamily: 'NR',
            fontSize: 18,
            color: '#F2F2F2',
            marginTop: 5,
          },
        }}
        name="notification"
        component={Notifications}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, focused, size }) => (
            <Ionicons
              color={Colors.default}
              size={25}
              name={'wallet-outline'}
            />
          ),
          drawerLabel: 'Wallet',
          drawerLabelStyle: {
            fontFamily: 'NR',
            fontSize: 18,
            color: '#F2F2F2',
            marginTop: 5,
          },
        }}
        name="Wallet"
        component={WalletStackNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, focused, size }) => (
            <Ionicons color={Colors.default} size={25} name={'time-outline'} />
          ),
          drawerLabel: 'History',
          drawerLabelStyle: {
            fontFamily: 'NR',
            fontSize: 18,
            color: '#F2F2F2',
            marginTop: 5,
          },
        }}
        name="history"
        component={History}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, focused, size }) => (
            <Ionicons
              color={Colors.default}
              size={25}
              name={'settings-outline'}
            />
          ),
          drawerLabel: 'Settings',
          drawerLabelStyle: {
            fontFamily: 'NR',
            fontSize: 18,
            color: '#F2F2F2',
            marginTop: 5,
          },
        }}
        name="settings"
        component={Settings}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
