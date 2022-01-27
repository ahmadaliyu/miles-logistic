import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { formatToast } from '../helpers/formatToast'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import AppText from '../reusables/AppText'
import AppButton from '../reusables/AppButton'
import Track from '../../assets/icons/navigation.svg'
import Close from '../../assets/icons/close.svg'
import AppSVG from '../reusables/AppSVG'
import CustomModal from '../reusables/CustomModal'
import AppInput from '../reusables/AppInput'
import {
  autoComplete,
  fetchPlaces,
  searchAddress,
  searchLocation,
} from '../redux/maps/mapThunk'
import Colors from '../utils/Colors'
import { OBJREPRESENTATION } from '../helpers/utils/interface'
import { googleApiKey } from '../../env'
import PickupIcon from '../../assets/icons/pickup-address-icon.svg'
import DeliveryIcon from '../../assets/icons/delivery-address-icon.svg'
import LottieView from 'lottie-react-native'
import AppCard from '../reusables/AppCard'
import Animated, { ZoomIn, ZoomInLeft } from 'react-native-reanimated'
import { Controller, useForm } from 'react-hook-form'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const MapScreen = ({ navigation: { navigate } }) => {
  let restaurantsFromPickupLocation = []
  let combinedRestaurants = []
  let restaurantsFromDeliveryLocation = []
  const [currenLocationtLat, setCurrenLocationtLat] = useState(null)
  const [currenLocationtLong, setCurrenLocationLong] = useState(null)
  const [pickupLocationtLat, setPickupLocationLat] = useState(null)
  const [pickupLocationtLong, setPickupLocationLong] = useState(null)
  const [deliveryLocationLat, setDeliveryLocationLat] = useState(null)
  const [deliveryLocationLong, setDeliveryLocationLong] = useState(null)
  const [isModalVisible, setModalVisible] = useState(false)
  const [pickupAddress, setPickupAddress] = useState()
  const [deliveryAddress, setDeliveryAddress] = useState()
  const [focus, setFocus] = useState(false)
  const [focus2, setFocus2] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [
    listFromCombinedRestaurants,
    setListFromCombinedRestaurants,
  ] = useState(combinedRestaurants)

  const placesAutocomplete = useSelector(
    (state: RootStateOrAny) => state.mapSlice.autoCompletePlaces,
  )
  const status = useSelector((state: RootStateOrAny) => state.mapSlice.status)

  const dispatch = useDispatch()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleAutoComplete = (text?: any, id?: string) => {
    if (id == 'pickup') setPickupAddress(text)
    else setDeliveryAddress(text)
    dispatch(autoComplete({ text }))
  }

  const handleSelectAddress = async (address?: any, id?: string) => {
    if (id === 'pickup') {
      setPickupAddress(address)
      setFocus(false)
    } else {
      setDeliveryAddress(address)
      setFocus2(false)
    }
  }

  const handleSearchSelectedLocation = async () => {
    if (pickupAddress === null || deliveryAddress === null) {
      setModalVisible(false)
      formatToast('Address cannot be empty!')
      return
    }
    setLoading(!loading)
    setModalVisible(false)
    try {
      const response = await fetch(
        'https://maps.googleapis.com/maps/api/geocode/json?address=' +
          pickupAddress +
          '&key=' +
          googleApiKey,
      )
      const respData = await response.json()
      const geoData: OBJREPRESENTATION = {}
      if (respData.results.length > 0) {
        geoData['latitude'] = respData.results[0].geometry.location.lat
        geoData['longitude'] = respData.results[0].geometry.location.lng
        setPickupLocationLat(geoData.latitude)
        setPickupLocationLong(geoData.longitude)
      }
      const response2 = await fetch(
        'https://maps.googleapis.com/maps/api/geocode/json?address=' +
          deliveryAddress +
          '&key=' +
          googleApiKey,
      )
      const respData2 = await response2.json()
      const geoData2: OBJREPRESENTATION = {}
      if (respData2.results.length > 0) {
        geoData2['latitude'] = respData2.results[0].geometry.location.lat
        geoData2['longitude'] = respData2.results[0].geometry.location.lng
        setDeliveryLocationLat(geoData2.latitude)
        setDeliveryLocationLong(geoData2.longitude)
      }

      const resPickup = await fetch(
        'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
          geoData.latitude +
          ',' +
          geoData.longitude +
          '&radius=4500&key=' +
          googleApiKey,
      )
      const resPick = await resPickup.json()
      resPick.results.forEach((result) => {
        if (result.types.includes('restaurant')) {
          restaurantsFromPickupLocation.push({
            place_id: result.place_id,
            name: result.name,
            rating: result.rating,
          })
        }
      })

      const resDelivery = await fetch(
        'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
          geoData2.latitude +
          ',' +
          geoData2.longitude +
          '&radius=4500&key=' +
          googleApiKey,
      )
      const resDel = await resDelivery.json()
      resDel.results.forEach((result) => {
        if (result.types.includes('restaurant')) {
          restaurantsFromDeliveryLocation.push({
            place_id: result.place_id,
            name: result.name,
            rating: result.rating,
          })
        }
      })
      // console.log(restaurantsFromPickupLocation)
      // console.log(restaurantsFromDeliveryLocation)
      if (resDel) setLoading(loading)
      setListFromCombinedRestaurants([
        ...restaurantsFromPickupLocation,
        ...restaurantsFromDeliveryLocation,
      ])
    } catch (error) {
      console.log(error)
    }
  }

  const uniqueRestaurants = [
    ...new Map(
      listFromCombinedRestaurants.map((item) => [item['place_id'], item]),
    ).values(),
  ]

  useEffect(() => {
    setLoading(loading)
  }, [loading, setLoading])

  useEffect(() => {
    setListFromCombinedRestaurants(listFromCombinedRestaurants)
    setPickupAddress(null)
    setDeliveryAddress(null)
  }, [])

  // // console.log(loading)
  // console.log('uniques', uniqueRestaurants)
  // console.log(pickupAddress)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        formatToast('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setCurrenLocationtLat(location.coords.latitude.toString())
      setCurrenLocationLong(location.coords.longitude.toString())
    })()
  }, [])
  return (
    <View style={styles.container}>
      <MapView
        region={{
          latitude: +currenLocationtLat,
          longitude: +currenLocationtLong,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        // showsTraffic={true}
        style={styles.mapStyle}
      >
        <Marker
          coordinate={{
            latitude: +currenLocationtLat,
            longitude: +currenLocationtLong,
          }}
        />
        <Marker
          coordinate={{
            latitude: +pickupLocationtLat,
            longitude: +pickupLocationtLong,
          }}
        >
          <View>
            <AppText
              title="Pickup location"
              fontSize={12}
              fontFamily="NSB"
              color={Colors.danger}
            />
            <AppSVG svgName={PickupIcon} width={35} height={35} />
          </View>
        </Marker>
        <Marker
          pinColor={Colors.primary}
          coordinate={{
            latitude: +deliveryLocationLat,
            longitude: +deliveryLocationLong,
          }}
        >
          <View>
            <AppText
              title="Delivery location"
              fontSize={12}
              fontFamily="NSB"
              color={Colors.facebookColor}
            />
            <AppSVG svgName={DeliveryIcon} width={35} height={35} />
          </View>
        </Marker>
      </MapView>
      {uniqueRestaurants.length > 0 && !loading && (
        <Animated.View
          entering={ZoomInLeft}
          style={{
            position: 'absolute',
            width: WIDTH,
            marginVertical: HEIGHT * 0.02,
          }}
        >
          <AppCard
            onPress={() =>
              navigate('companies', {
                uniqueRestaurants,
                pickupAddress: pickupAddress,
                deliveryAddress: deliveryAddress,
              })
            }
            width={WIDTH * 0.6}
            pv="2%"
            style={{ height: HEIGHT * 0.09, marginLeft: '5%' }}
          >
            <AppText
              title={`${uniqueRestaurants.length} ${
                uniqueRestaurants.length < 2 ? 'company' : 'companies'
              } found`}
              fontSize={13}
              color={Colors.primary}
              style={{ fontWeight: '600' }}
            />
            <AppText title="Click to view" fontSize={12} mt="2%" />
          </AppCard>
        </Animated.View>
      )}
      {loading && (
        <View
          style={{
            height: HEIGHT,
            width: WIDTH,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
          }}
        >
          <LottieView
            source={require('../../assets/animations/location-finding.json')}
            style={{ width: 200, height: 200 }}
            autoPlay
            loop
          />
        </View>
      )}
      <TouchableOpacity
        // disabled={}
        onPress={() => setModalVisible(true)}
        style={{
          marginTop: HEIGHT * 0.85,
          marginLeft: WIDTH * 0.75,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5%',
          borderRadius: 40,
          backgroundColor: '#fff',
        }}
      >
        <AppSVG svgName={Track} width={25} height={25} />
      </TouchableOpacity>
      <CustomModal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
      >
        <AppText
          textAlign={'center'}
          mt={'10%'}
          fontFamily="NSB"
          fontSize={18}
          title={'Route'}
        />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <AppInput
                  alignSelf="center"
                  mt={'10%'}
                  placeholder={'Pickup Location'}
                  rightIcon={Close}
                  rIconWidth={15}
                  rIconHeight={15}
                  value={pickupAddress}
                  onChangeText={(text) => handleAutoComplete(text, 'pickup')}
                  onFocus={() => setFocus((prevState) => !prevState)}
                  onPressRightIcon={() => setPickupAddress(null)}
                />
              )}
              name="pickupAddress"
              // rules={{ required: true }}
              defaultValue=""
            />
            {status == 'completing' ? (
              <View
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  alignSelf: 'center',
                  marginTop: HEIGHT * 0.2,
                }}
              >
                <AppText title="Loading..." fontSize={11} />
              </View>
            ) : (
              <>
                <>
                  {placesAutocomplete.length > 0 && focus && (
                    <View style={styles.resultsView}>
                      <FlatList
                        data={placesAutocomplete}
                        renderItem={({ item }) => {
                          return (
                            <TouchableOpacity
                              style={{}}
                              onPress={() => {
                                handleSelectAddress(item.description, 'pickup')
                              }}
                            >
                              <AppText
                                fontSize={13}
                                ml="3%"
                                color={Colors.dark}
                                lineHeight={25}
                                title={item.description}
                              />
                            </TouchableOpacity>
                          )
                        }}
                        keyExtractor={(item, id) => id.toString()}
                        ItemSeparatorComponent={() => (
                          <View
                            style={{
                              height: 0.5,
                              width: '100%',
                              backgroundColor: 'grey',
                            }}
                          ></View>
                        )}
                        showsVerticalScrollIndicator={false}
                      />
                    </View>
                  )}
                </>
                <>
                  {placesAutocomplete.length > 0 && focus2 && (
                    <View style={styles.resultsView}>
                      <FlatList
                        data={placesAutocomplete}
                        renderItem={({ item }) => {
                          return (
                            <TouchableOpacity
                              style={{}}
                              onPress={() => {
                                handleSelectAddress(
                                  item.description,
                                  'delivery',
                                )
                              }}
                            >
                              <AppText
                                fontSize={13}
                                ml="3%"
                                color={Colors.dark}
                                lineHeight={25}
                                title={item.description}
                              />
                            </TouchableOpacity>
                          )
                        }}
                        keyExtractor={(item, id) => id.toString()}
                        ItemSeparatorComponent={() => (
                          <View
                            style={{
                              height: 0.5,
                              width: '100%',
                              backgroundColor: 'grey',
                            }}
                          ></View>
                        )}
                        showsVerticalScrollIndicator={false}
                      />
                    </View>
                  )}
                </>
              </>
            )}

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <AppInput
                  alignSelf="center"
                  mv={'7%'}
                  placeholder={'Delivery Location'}
                  rIconWidth={15}
                  rIconHeight={15}
                  rightIcon={Close}
                  value={deliveryAddress}
                  onChangeText={(text) => handleAutoComplete(text, 'delivery')}
                  onFocus={() => setFocus2((prevState) => !prevState)}
                  onPressRightIcon={() => setDeliveryAddress(null)}
                />
              )}
              name="deliveryAddress"
              // rules={{ required: true }}
              defaultValue=""
            />
          </View>
        </View>
        <AppButton
          // onPress={() => setModalVisible(false)}
          onPress={handleSubmit(handleSearchSelectedLocation)}
          borderRadius={20}
          fontFamily="NR"
          fontSize={16}
          pv="4.5%"
          width="70%"
          title={'Search'}
          mt={'20%'}
        />
      </CustomModal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default,
  },
  mapStyle: {
    width: WIDTH,
    height: HEIGHT,
  },
  resultsView: {
    alignSelf: 'center',
    padding: '3%',
    width: '100%',
    borderRadius: 5,
    position: 'absolute',
    marginTop: '50%',
    zIndex: 1,
  },
})

export default MapScreen
