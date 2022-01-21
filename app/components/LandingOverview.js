import React from "react";
import { StyleSheet, View } from "react-native";
import AppSVG from "../reusables/AppSVG";
import AppText from "../reusables/AppText";
import Colors from "../utils/Colors";
import IllustrationOne from "../../assets/images/illustration-1.svg";
import CarouselCard from "./CarouselCard";
import AppButton from "../reusables/AppButton";

const LandingOverview = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <AppText
        title={"Skip"}
        ml={"70%"}
        mt={"-10%"}
        mb={"5%"}
        fontFamily="NB"
        fontSize={15}
        color={Colors.primary}
      /> */}
      <AppText
        title="Get your package in 3 easy steps"
        fontSize={18}
        fontFamily="NB"
        mb="15%"
      />
      <View style={{ height: "65%" }}>
        <CarouselCard navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LandingOverview;
