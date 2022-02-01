import * as React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import AppCard from "../../reusables/AppCard";
import AppSVG from "../../reusables/AppSVG";
import AppText from "../../reusables/AppText";
import Colors from "../../utils/Colors";
import RideBike from "../../../assets/icons/ride.svg";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppButton from "../../reusables/AppButton";
import { Button, Divider, NativeBaseProvider } from "native-base";
import Animated, {
  ZoomIn,
  ZoomInEasyDown,
  ZoomInEasyUp,
} from "react-native-reanimated";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Companies = ({ route, navigation: { navigate } }) => {
  let companies = route.params?.uniqueRestaurants;
  let pickupAddress = route.params?.pickupAddress;
  let deliveryAddress = route.params?.deliveryAddress;
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
                <AppCard width="92%" alS="center" mv={"2%"} pv={"0%"} ph="0%">
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: Colors.lighter,
                        width: "25%",
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <AppSVG svgName={RideBike} width={40} height={40} />
                      </View>
                      <Divider background={Colors.grey} thickness={0.5} />
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          alignItems: "center",
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

                    <View style={{ width: "75%", marginLeft: "3%" }}>
                      <AppText
                        title={item.name}
                        fontSize={14}
                        color={Colors.darkSecondary}
                        fontFamily="NSB"
                        mt={"5%"}
                        width={"80%"}
                      />
                      <AppText title="₦1000" fontFamily="NB" mv={"5%"} />
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <AppText
                          title="AVAILABLE"
                          color={Colors.green}
                          fontSize={12}
                        />
                        <AppButton
                          onPress={() =>
                            navigate("requestDetails", {
                              pickupAddress: pickupAddress,
                              deliveryAddress: deliveryAddress,
                              name: item.name,
                            })
                          }
                          fontFamily="NR"
                          fontSize={11}
                          width={"25%"}
                          title="Request"
                        />
                      </View>
                    </View>
                  </View>
                </AppCard>
              </Animated.View>
            );
          }}
          ListHeaderComponent={() => (
            <AppText
              title="List of Companies"
              fontSize={14}
              fontFamily="NSB"
              style={{ padding: "5%" }}
            />
          )}
        />
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default,
  },
});

export default Companies;
