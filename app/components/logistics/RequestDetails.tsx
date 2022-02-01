import { Divider } from "native-base";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import AppButton from "../../reusables/AppButton";
import AppCard from "../../reusables/AppCard";
import AppText from "../../reusables/AppText";
import Colors from "../../utils/Colors";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const RequestDetails = ({ route, navigation: { navigate } }) => {
  let pickupAddress = route.params?.pickupAddress;
  let deliveryAddress = route.params?.deliveryAddress;
  let name = route.params?.name;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppText title={name} m="5%" width={"80%"} />
        <AppCard
          alS={"center"}
          mv="2%"
          pv="5%"
          style={{ height: HEIGHT / 2.7 }}
        >
          <AppText
            title="Pickup point details"
            //   color={Colors.facebookColor}
            fontSize={14}
            fontFamily="NSB"
          />
          <Divider marginY={2} />
          <TextInput
            style={{
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.mediumGrey,
              paddingTop: "3%",
            }}
            placeholder="First Name"
            placeholderTextColor={Colors.dark}
          />
          <TextInput
            style={{
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.mediumGrey,
              paddingTop: "3%",
            }}
            placeholder="Last Name"
            placeholderTextColor={Colors.dark}
          />
          <TextInput
            style={{
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.mediumGrey,
              paddingTop: "3%",
            }}
            placeholder="Email"
            placeholderTextColor={Colors.dark}
          />
          <TextInput
            style={{
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.mediumGrey,
              paddingTop: "3%",
            }}
            placeholder="Phone Number"
            placeholderTextColor={Colors.dark}
          />
          <AppText
            title={pickupAddress}
            fontSize={13}
            color={Colors.dark}
            mt="13%"
          />
        </AppCard>
        <AppCard alS={"center"} pv="5%" style={{}}>
          <AppText
            title="Delivery point details"
            //   color={Colors.facebookColor}
            fontSize={14}
            fontFamily="NSB"
          />
          <Divider marginY={2} />
          <TextInput
            style={{
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.mediumGrey,
              paddingTop: "3%",
            }}
            placeholder="First Name"
            placeholderTextColor={Colors.dark}
          />
          <TextInput
            style={{
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.mediumGrey,
              paddingTop: "3%",
            }}
            placeholder="Last Name"
            placeholderTextColor={Colors.dark}
          />
          <TextInput
            style={{
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.mediumGrey,
              paddingTop: "3%",
            }}
            placeholder="Email"
            placeholderTextColor={Colors.dark}
          />
          <TextInput
            style={{
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.mediumGrey,
              paddingTop: "3%",
            }}
            placeholder="Phone Number"
            placeholderTextColor={Colors.dark}
          />
          <AppText
            title={deliveryAddress}
            fontSize={13}
            color={Colors.dark}
            mt="13%"
          />
        </AppCard>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: "5%",
          }}
        >
          <AppButton title="Cancel" width={"35%"} fontSize={13} color="dim" />
          <AppButton
            onPress={() => navigate("payment")}
            title="Request"
            width={"35%"}
            fontSize={13}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default,
  },
});

export default RequestDetails;
