import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppCard from "../../reusables/AppCard";
import AppText from "../../reusables/AppText";
import Colors from "../../utils/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Divider } from "native-base";
import Animated, { ZoomInEasyDown } from "react-native-reanimated";
import AppButton from "../../reusables/AppButton";

const BillSummary = () => {
  const [openCard, setOpenCard] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");
  return (
    <View style={styles.container}>
      <AppCard width={"100%"} alS={"center"} mv="2%" pv={"3%"}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="newspaper" color={Colors.facebookColor} size={30} />
          <AppText title="Bill Summary" fontFamily="NSB" ml={"7%"} />
        </View>
        <Divider marginTop={"4%"} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: "4%",
            marginHorizontal: "5%",
          }}
        >
          <AppText title="Delivery Fee" fontSize={15} />
          <AppText title="1000" fontSize={16} fontFamily="NSB" />
        </View>
        <Divider marginTop={"4%"} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: "4%",
            marginHorizontal: "5%",
          }}
        >
          <AppText title="Total" fontSize={15} />
          <AppText
            title="1000"
            fontSize={16}
            color={Colors.primary}
            fontFamily="NSB"
          />
        </View>
      </AppCard>
      <AppCard
        onPress={() => setOpenCard((prevState) => !prevState)}
        width={"100%"}
        alS={"center"}
        mv="2%"
        pv={"3%"}
        childStyle={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Ionicons name="options-outline" size={30} />
        <AppText title="Payment Options" fontFamily="NSB" mr={"30%"} />
        <Ionicons
          name={openCard ? "chevron-down-outline" : "chevron-up-outline"}
          size={25}
        />
      </AppCard>
      {openCard && (
        <Animated.View entering={ZoomInEasyDown}>
          <AppCard width={"100%"}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: "2%",
                marginHorizontal: "3%",
                justifyContent: "space-between",
              }}
            >
              <Ionicons name="wallet" color={Colors.primary} size={30} />
              <AppText title="Wallet" mr="50%" fontSize={16} />
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setSelectedMethod("wallet")}
              >
                <Ionicons
                  name={
                    selectedMethod === "wallet"
                      ? "radio-button-on"
                      : "radio-button-off"
                  }
                  size={27}
                  color={Colors.orange}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: "2%",
                justifyContent: "space-between",
                marginHorizontal: "3%",
              }}
            >
              <Ionicons name="cash" color={Colors.green} size={30} />
              <AppText title="Cash on delivery" mr="25%" fontSize={16} />
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setSelectedMethod("cash")}
              >
                <Ionicons
                  name={
                    selectedMethod === "cash"
                      ? "radio-button-on"
                      : "radio-button-off"
                  }
                  size={27}
                  color={Colors.orange}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: "2%",
                justifyContent: "space-between",
                marginHorizontal: "3%",
              }}
            >
              <Ionicons name="card" color="brown" size={30} />
              <AppText title="Card" mr="53%" fontSize={16} />
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setSelectedMethod("card")}
              >
                <Ionicons
                  name={
                    selectedMethod === "card"
                      ? "radio-button-on"
                      : "radio-button-off"
                  }
                  size={27}
                  color={Colors.orange}
                />
              </TouchableOpacity>
            </View>
            <AppButton
              title="To Payment"
              fontSize={12}
              borderRadius={20}
              borderWidth={1}
              textColor="dark"
              color="default"
              width={"50%"}
            />
          </AppCard>
        </Animated.View>
      )}
      <AppButton
        borderRadius={10}
        title="Submit"
        color="dark"
        fontSize={16}
        mv="15%"
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

export default React.memo(BillSummary);
