import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import AppButton from "../../reusables/AppButton";
import AppText from "../../reusables/AppText";
import DelieveryAmico from "../../../assets/images/delivery-amico.svg";
import DelieveryBike from "../../../assets/images/bike.svg";
import Truck from "../../../assets/images/truck.svg";
import Colors from "../../utils/Colors";
import { fetchPlaces } from "../../redux/maps/mapThunk";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import * as Location from "expo-location";
import { formatToast } from "../../helpers/formatToast";
import AppCard from "../../reusables/AppCard";
import AppSVG from "../../reusables/AppSVG";
import { multiCheckbox } from "../../helpers/multiCheckbox";
import { useNavigation } from "@react-navigation/native";


const vehicles = [
  {
    id: 1,
    type: "Truck",
    price: "$7.65",
    image: Truck,
    checked: false,
  },
  {
    id: 2,
    type: "Bike",
    price: "$3.79",
    image: DelieveryBike,
    checked: false,
  },
];

const UserHome = () => {
  const navigation = useNavigation()
  const [lists, setList] = useState(vehicles);

  const status = useSelector((state : RootStateOrAny) => state.mapSlice.status);
  // const placesDetails = useSelector((state) => state.mapSlice.placesDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        formatToast("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      dispatch(
        fetchPlaces({
          longitude: location.coords.longitude.toString(),
          latitude: location.coords.latitude.toString(),
        }),
      );
    })();
  }, []);

  const totalPickedVehicle = (list: any[]) => {
    let picked = [];
    list.forEach((itm) => {
      if (itm.checked) {
        picked.push(itm.type);
      }
    });
    return picked;
  };

  return (
    <View style={styles.container}>
      <AppText
        title={"Your Stats"}
        ml={"10%"}
        mv={"2%"}
        fontFamily="NB"
        fontSize={16}
      />
      <AppCard
        mv="3%"
        background="skyBlue"
        ph="5%"
        width="80%"
        borderRadius={30}
        alS="center"
        pv="2%"
      >
        <AppText
          ml={"2%"}
          mt={"4%"}
          title={"Track your shipment"}
          fontFamily="NSB"
          fontSize={15}
        />
        <AppText
          title={"Type your tracking number and find your order"}
          mt={"2%"}
          ml={"2%"}
          width={"80%"}
          color={Colors.mediumDark}
          fontSize={12}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <AppButton
            title={"Track"}
            width="26%"
            borderRadius={13}
            pv="3%"
            textColor="dark"
            fontSize={13}
            color="default"
          />
          <AppSVG svgName={DelieveryAmico} width={120} height={120}  />
        </View>
      </AppCard>
      <AppText
        title={"Quick Order"}
        ml={"10%"}
        mv={"3%"}
        mt={"10%"}
        fontFamily="NB"
        fontSize={16}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "11%",
        }}
      >
        {vehicles.map((item) => {
          return (
            <View key={item.id.toString()}>
              <AppCard
                mv="3%"
                background={item.checked ? "skyBlue" : "mediumGrey"}
                ph="5%"
                width="70%"
                borderRadius={25}
                pv="9%"
                al="center"
              >
                <View>
                  <AppSVG
                    al={"center"}
                    svgName={item.image}
                    width={60}
                    height={60}
                  />
                </View>
              </AppCard>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <View>
                  <AppText
                    title={item.type}
                    fontSize={16}
                    color={Colors.cloudWhite}
                    ml={"15%"}
                  />
                  <AppText title={item.price} fontFamily="NSB" ml={"15%"} />
                </View>
                <AppButton
                  onPress={() => {
                    multiCheckbox(
                      setList,
                      item,
                      totalPickedVehicle(lists).length,
                    );
                  }}
                  title={
                    (item.checked && item.type == "Truck") ||
                    (item.checked && item.type == "Bike")
                      ? "-"
                      : "+"
                  }
                  width="23%"
                  borderRadius={13}
                  pv={
                    (item.checked && item.type == "Truck") ||
                    (item.checked && item.type == "Bike")
                      ? "5%"
                      : "4%"
                  }
                  textColor={
                    (item.checked && item.type == "Truck") ||
                    (item.checked && item.type == "Bike")
                      ? "default"
                      : "dark"
                  }
                  fontSize={20}
                  color={
                    (item.checked && item.type == "Truck") ||
                    (item.checked && item.type == "Bike")
                      ? "dark"
                      : "default"
                  }
                  borderColor={Colors.grey}
                  borderWidth={
                    (item.checked && item.type == "Truck") ||
                    (item.checked && item.type == "Bike")
                      ? 0
                      : 2
                  }
                />
              </View>
            </View>
          );
        })}
      </View>
      <AppButton
        onPress={() => navigation.navigate("maps" as never)}
        borderRadius={20}
        fontFamily="NR"
        fontSize={16}
        pv="4.5%"
        width="70%"
        title={"Continue"}
        mt={"20%"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default,
  },
});

export default UserHome;
