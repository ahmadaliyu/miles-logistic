import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { formatToast } from "../helpers/formatToast";
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import AppText from '../reusables/AppText';
import AppButton from "../reusables/AppButton";
import Track from "../../assets/icons/navigation.svg";
import Close from "../../assets/icons/close.svg";
import AppSVG from '../reusables/AppSVG';
import CustomModal from "../reusables/CustomModal";
import AppInput from "../reusables/AppInput";
import { autoComplete, fetchPlaces } from '../redux/maps/mapThunk';
import Colors from "../utils/Colors";
import { OBJREPRESENTATION } from "../helpers/utils/interface";
import { googleApiKey } from '../../env';
import PickupIcon from "../../assets/icons/pickup-address-icon.svg"
import DeliveryIcon from "../../assets/icons/delivery-address-icon.svg"
import LottieView from 'lottie-react-native';
import AppCard from "../reusables/AppCard";
import Animated, { ZoomIn, ZoomInLeft } from "react-native-reanimated"


const HEIGHT = Dimensions.get("window").height
const WIDTH = Dimensions.get("window").width

const Map = ({ lat, lng, latCoord, lngCoord }) => {
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
  const [selectedAddress, setSelectedAddress] = useState()
  const [selectedAddress2, setSelectedAddress2] = useState()
  const [focus, setFocus] = useState(false)
  const [focus2, setFocus2] = useState(false)
  const [loading, setLoading] = useState(false)
  const [listFromCombinedRestaurants, setListFromCombinedRestaurants] = useState(combinedRestaurants)
  // const [listFromPickup, setListFromPickup] = useState(restaurantsFromPickupLocation)
  // const [listFromDelivery, setListFromDelivery] = useState(restaurantsFromDeliveryLocation)

  const placesAutocomplete = useSelector((state: RootStateOrAny) => state.mapSlice.autoCompletePlaces)
  const fetchedPlaces = useSelector((state: RootStateOrAny) => state.mapSlice.placesDetail)
  const status = useSelector((state: RootStateOrAny) => state.mapSlice.status)
  
  const dispatch = useDispatch()

  const handleFetchAutoComplete = (text: any) => {
    setSelectedAddress(text);
    dispatch(autoComplete({ text }));
  };
  const handleFetchAutoCompleteFunc = (text: any) => {
    setSelectedAddress2(text);
    dispatch(autoComplete({ text }));
  };

  const handleSelectPlace = async (address) => {
    setSelectedAddress(address)
    setFocus(false)
    try {
      const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + googleApiKey);
      const respData = await response.json();
      const geoData : OBJREPRESENTATION = {};
      if (respData.results.length > 0) {
        geoData['latitude'] = respData.results[0].geometry.location.lat;
        geoData['longitude'] = respData.results[0].geometry.location.lng;
      }
      setPickupLocationLat(geoData.latitude.toString())
      setPickupLocationLong(geoData.longitude.toString())
    } catch (error) {}
  }
  const handleSelectPlaceFunc = async (address) => {
    setSelectedAddress2(address)
    setFocus2(false)
    try {
      const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + googleApiKey);
      const respData = await response.json();
      const geoData : OBJREPRESENTATION = {};
      if (respData.results.length > 0) {
        geoData['latitude'] = respData.results[0].geometry.location.lat;
        geoData['longitude'] = respData.results[0].geometry.location.lng;
      }
      setDeliveryLocationLat(geoData.latitude.toString())
      setDeliveryLocationLong(geoData.longitude.toString())
    } catch (error) {}
  }

  const handleSearchSelectedLocation = async () => {
    setModalVisible(false)
    setLoading(true)
    // let combinedRestaurants = []
    // let restaurantsFromPickupLocation = []
    // let restaurantsFromDeliveryLocation = []
    try {
      const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + selectedAddress + '&key=' + googleApiKey);
      const respData = await response.json();
      const geoData : OBJREPRESENTATION = {};
      if (respData.results.length > 0) {
        geoData['latitude'] = respData.results[0].geometry.location.lat;
        geoData['longitude'] = respData.results[0].geometry.location.lng;
      }

      const response2 = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + selectedAddress2 + '&key=' + googleApiKey);
      const respData2 = await response2.json();
      const geoData2 : OBJREPRESENTATION = {};
      if (respData2.results.length > 0) {
        geoData2['latitude'] = respData2.results[0].geometry.location.lat;
        geoData2['longitude'] = respData2.results[0].geometry.location.lng;
      }

      const resPickup = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + geoData.latitude + ',' + geoData.longitude + '&radius=4500&key=' + googleApiKey)
      const resPick = await resPickup.json()
      resPick.results.forEach(result => {
        if (result.types.includes('restaurant') ) {
          restaurantsFromPickupLocation.push({
            place_id: result.place_id,
            name: result.name,
            // user_ratings_total: result.user_ratings_total,
            // rating: result.rating,
            // vicinity: result.vicinity,
            // reference: result.reference,
            // opening_hours: result.opening_hours,
            // photos: result.photos,
            // types: result.types,
          });
        }
      });
      
      // dispatch(fetchPlaces({ longitude: geoData2.longitude.toString(), latitude: geoData2.latitude.toString() }));
      const resDelivery = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + geoData2.latitude + ',' + geoData2.longitude + '&radius=4500&key=' + googleApiKey)
      const resDel = await resDelivery.json()
      setLoading(false)
      resDel.results.forEach(result => {
        if (result.types.includes('restaurant') ) {
          restaurantsFromDeliveryLocation.push({
            place_id: result.place_id,
            name: result.name,
            // user_ratings_total: result.user_ratings_total,
            // rating: result.rating,
            // vicinity: result.vicinity,
            // reference: result.reference,
            // opening_hours: result.opening_hours,
            // photos: result.photos,
            // types: result.types,
          });
        }
      });

      combinedRestaurants = [...restaurantsFromPickupLocation, ...restaurantsFromDeliveryLocation]
      setListFromCombinedRestaurants([...restaurantsFromPickupLocation,...restaurantsFromDeliveryLocation])
      console.log("pickup", restaurantsFromPickupLocation)
      console.log("delivery", restaurantsFromDeliveryLocation)
      // console.log("hauka", combinedRestaurants)
    } catch (error) {
      console.log(error)
    }
  };


  // useEffect(() => {
  //   setListFromPickup(restaurantsFromPickupLocation)
  //   setListFromDelivery(restaurantsFromDeliveryLocation)
  //   setListFromCombinedRestaurants(combinedRestaurants)
  // }, [combinedRestaurants.length, restaurantsFromPickupLocation.length, restaurantsFromDeliveryLocation.length])
  
  console.log("haukasss", listFromCombinedRestaurants)



  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        formatToast("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setCurrenLocationtLat(location.coords.latitude.toString())
      setCurrenLocationLong(location.coords.longitude.toString())
    })();
  }, []);
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
          coordinate={{ latitude: +currenLocationtLat, longitude: +currenLocationtLong }}
        />
        <Marker
          coordinate={{ latitude: +pickupLocationtLat, longitude: +pickupLocationtLong }}
        >
          <View>
            <AppText title="Pickup location" fontSize={12} fontFamily="NSB" color={Colors.danger} />
            <AppSVG svgName={PickupIcon} width={35} height={35} />
            </View>
        </Marker>
        <Marker
          pinColor={Colors.primary}
          coordinate={{ latitude: +deliveryLocationLat, longitude: +deliveryLocationLong }}
        >
          <View>
          <AppText title="Delivery location" fontSize={12} fontFamily="NSB" color={Colors.facebookColor} />
            <AppSVG svgName={DeliveryIcon} width={35} height={35} />
            </View>
        </Marker>
      </MapView>
      {listFromCombinedRestaurants.length > 0 && !loading &&
        ( 
        <Animated.View entering={ZoomInLeft} style={{ position: "absolute", width: WIDTH,  marginVertical: HEIGHT * 0.02 }}>
          <AppCard onPress={() =>{}} width={WIDTH * 0.6}  pv="2%" style={{height: HEIGHT * 0.09, marginLeft: "5%",}} >
          <AppText title={`${listFromCombinedRestaurants.length} ${listFromCombinedRestaurants.length < 2 ? "company" : "companies" } found`} fontSize={13} color={Colors.primary} style={{fontWeight: '600',}} />
                        <AppText title="Click to view" fontSize={12} mt="2%" />
                  </AppCard>
          
        </Animated.View>
        )
      }
      {loading &&
        (
        <View style={{ height:HEIGHT, width:WIDTH, alignItems: "center", justifyContent: "center", position: "absolute" }}>
          <LottieView
            source={require('../../assets/animations/location-finding.json')}
            style={{width:200, height:200}}
            autoPlay
            loop
          />
        </View>
        )
      }
      <TouchableOpacity disabled={loading} onPress={() => setModalVisible(true)} style={{ marginTop:HEIGHT * 0.85, marginLeft: WIDTH * 0.75,  position: "absolute", alignItems:"center", justifyContent:"center", padding:"5%", borderRadius:40, backgroundColor: "#fff", }}>
        <AppSVG svgName={Track} width={25} height={25} />
      </TouchableOpacity>
      <CustomModal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
      >
        <AppText
          textAlign={"center"}
          mt={"10%"}
          fontFamily="NSB"
          fontSize={18}
          title={"Route"}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <View>
            <AppInput
              alignSelf="center"
              mt={"10%"}
              placeholder={"Pickup Location"}
              rightIcon={Close}
              rIconWidth={15}
              rIconHeight={15}
              value={selectedAddress}
              onChangeText={handleFetchAutoComplete}
              onFocus={() => setFocus(prevState => !prevState)}
              onPressRightIcon={() => setSelectedAddress(null)}
            />
            {status == "completing" ? <View style={{ position: "absolute", zIndex: 1, alignSelf: "center", marginTop: HEIGHT * 0.2 }}>
            <AppText title="Loading..." fontSize={11} />
            </View> : (
                <>
              <>
                {placesAutocomplete.length > 0 && focus  && (
                  <View style={styles.resultsView}>
                <FlatList
                  data={placesAutocomplete}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        style={{}}
                        onPress={() => {
                          handleSelectPlace(item.description);
                        }}
                      >
                        <AppText fontSize={13} ml="3%" color={Colors.dark} lineHeight={25} title={item.description} />
                      </TouchableOpacity>
                    );
                  }}
                  keyExtractor={(item, id) => id.toString()}
                  ItemSeparatorComponent={() => <View style={{ height: 0.5, width: '100%', backgroundColor: 'grey' }}></View>}
                  showsVerticalScrollIndicator={false}
                />
              </View>
                )}
                </>
                <>
                {placesAutocomplete.length > 0 && focus2  && (
                  <View style={styles.resultsView}>
                <FlatList
                  data={placesAutocomplete}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        style={{}}
                        onPress={() => {
                          handleSelectPlaceFunc(item.description);
                        }}
                      >
                        <AppText fontSize={13} ml="3%" color={Colors.dark}  lineHeight={25} title={item.description} />
                      </TouchableOpacity>
                    );
                  }}
                  keyExtractor={(item, id) => id.toString()}
                  ItemSeparatorComponent={() => <View style={{ height: 0.5, width: '100%', backgroundColor: 'grey' }}></View>}
                  showsVerticalScrollIndicator={false}
                />
              </View>
                )}
                  </>
                  </>
            )}

            <AppInput
              alignSelf="center"
              mv={"7%"}
              placeholder={"Delivery Location"}
              rIconWidth={15}
              rIconHeight={15}
              rightIcon={Close}
              value={selectedAddress2}
              onFocus={() => setFocus2(prevState => !prevState)}
              onChangeText={handleFetchAutoCompleteFunc}
              onPressRightIcon={() => setSelectedAddress2(null)}
            />
          </View>
        </View>
        <AppButton
        // onPress={() => setModalVisible(false)}
        onPress={handleSearchSelectedLocation}
        borderRadius={20}
        fontFamily="NR"
        fontSize={16}
        pv="4.5%"
        width="70%"
        title={"Search"}
        mt={"20%"}
      />
      </CustomModal> 
      </View>
  );
};

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
    alignSelf: "center",
    padding:"3%",
    width: '100%',
    borderRadius: 5,
    position: 'absolute',
    marginTop: '50%',
    zIndex: 1,
  },
});

export default Map;
