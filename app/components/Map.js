import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Map = ({ lat, lng, latCoord, lngCoord }) => {
  return (
    <View style={styles.container}>
      <MapView
        region={{
          latitude: +9.1099,
          longitude: +7.4042,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        showsTraffic={true}
        style={styles.mapStyle}
      >
        {/* <Marker title="Picked Location" coordinate={{ latitude: +lat, longitude: +long }} /> */}
        <Marker
          title="Pickup Location"
          coordinate={{ latitude: +9.1099, longitude: +7.4042 }}
        />
        <Marker
          title="Delievery Location"
          coordinate={{ latitude: +8.9868, longitude: +7.3626 }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Map;
