import * as React from 'react'
import { Dimensions, FlatList, StyleSheet, View } from 'react-native'
import AppCard from '../../reusables/AppCard'
import AppSVG from '../../reusables/AppSVG'
import AppText from '../../reusables/AppText'
import Colors from '../../utils/Colors'
import RideBike from '../../../assets/icons/ride.svg'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AppButton from '../../reusables/AppButton'
import { Divider, NativeBaseProvider } from 'native-base'
import Animated, {
  ZoomIn,
  ZoomInEasyDown,
  ZoomInEasyUp,
} from 'react-native-reanimated'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Companies = ({ route, navigation: { navigate } }) => {
  let companies = route.params?.uniqueRestaurants
  let pickupAddress = route.params?.pickupAddress
  let deliveryAddress = route.params?.deliveryAddress
  //   console.log(route.params?.uniqueRestaurants)
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <FlatList
          data={companies}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, id) => id.toString()}
          renderItem={({ item }) => {
            return (
              <Animated.View entering={ZoomInEasyUp}>
                <AppCard
                  childStyle={{
                    flexDirection: 'row',
                    //   justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  alS="center"
                  pv={'0%'}
                  ph="0%"
                >
                  <View
                    style={{
                      backgroundColor: Colors.lighter,
                      width: '25%',
                      height: '100%',
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                      //   paddingVertical: '5%',
                      alignItems: 'center',
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <AppSVG svgName={RideBike} width={40} height={40} />
                    </View>
                    <Divider background={Colors.grey} thickness={0.5} />
                    <View
                      style={{
                        flex: 1,
                        // marginTop: '5%',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Ionicons name="star" size={17} color={Colors.orange} />
                      <AppText
                        title={item.rating}
                        fontSize={11}
                        fontFamily="NSB"
                        ml="5%"
                      />
                    </View>
                  </View>
                  <View style={{ marginLeft: '3%' }}>
                    <AppText
                      title={item.name}
                      fontSize={14}
                      color={Colors.darkSecondary}
                      fontFamily="NSB"
                      mt={'5%'}
                    />
                    <AppText title="₦1000" fontFamily="NB" mv={'5%'} />
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <AppText
                        title="AVAILABLE"
                        color={Colors.green}
                        fontSize={12}
                        // mt="6%"
                      />
                      <AppButton
                        onPress={() =>
                          navigate('requestDetails', {
                            pickupAddress: pickupAddress,
                            deliveryAddress: deliveryAddress,
                          })
                        }
                        fontFamily="NR"
                        fontSize={11}
                        width="40%"
                        pv="4%"
                        ml="5%"
                        title="Request"
                      />
                    </View>
                  </View>
                </AppCard>
              </Animated.View>
            )
          }}
          ListHeaderComponent={() => (
            <AppText
              title="List of Companies"
              fontSize={14}
              fontFamily="NSB"
              style={{ padding: '5%' }}
            />
          )}
        />
      </View>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default,
  },
})

export default Companies
