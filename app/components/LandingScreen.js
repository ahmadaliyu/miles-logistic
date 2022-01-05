import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AppSVG from "../reusables/AppSVG";
import Colors from "../utils/Colors";
import AppText from "../reusables/AppText";
import DelieveryAmico from "../../assets/images/delivery-amico.svg";
import Search from "../../assets/icons/search.svg";
import Track from "../../assets/icons/navigation.svg";
import Info from "../../assets/icons/info.svg";
import Barchart from "../../assets/icons/barchart.svg";
import AppButton from "../reusables/AppButton";

const LandingScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ marginTop: "8%" }}>
          <AppText
            fontSize={16}
            title="Better delivery"
            color={Colors.cloudWhite}
          />
          <AppText
            fontSize={20}
            fontFamily="NB"
            width="65%"
            title="Be in control of your package."
          />
        </View>
        <AppSVG width={300} height={300} svgName={DelieveryAmico} />
        <AppText
          fontSize={20}
          fontFamily="NB"
          title="A better way for you"
          alignItems="center"
        />
        <View style={{ marginTop: "8%", alignItems: "center" }}>
          <AppSVG svgName={Search} />
          <AppText
            title="Quick search"
            fontSize={16}
            fontFamily="NSB"
            mv="2%"
          />
          <AppText
            width="90%"
            textAlign="center"
            title="Find delivery options faster and quicker with a wide range of delivery option close to you and available in your location."
            lineHeight={18}
          />
        </View>
        <View style={{ marginTop: "8%", alignItems: "center" }}>
          <AppSVG svgName={Track} />
          <AppText
            title="Track your stuff"
            fontSize={16}
            fontFamily="NSB"
            mv="2%"
          />
          <AppText
            width="90%"
            textAlign="center"
            title="We provide you with ability to track your ongoing delivery and get notifications concerning your delivery package."
            lineHeight={18}
          />
        </View>

        <View style={{ marginTop: "8%", alignItems: "center" }}>
          <AppSVG svgName={Info} />
          <AppText
            title="Info related"
            fontSize={16}
            fontFamily="NSB"
            mv="2%"
          />
          <AppText
            width="90%"
            textAlign="center"
            title="We provide information related to the delivery company you are choosing and options to compare them based on pricing and availabilty."
            lineHeight={18}
          />
        </View>
        <View style={{ marginTop: "8%", alignItems: "center" }}>
          <AppSVG svgName={Barchart} />
          <AppText
            title="Stats provided"
            fontSize={16}
            fontFamily="NSB"
            mv="2%"
          />
          <AppText
            width="90%"
            textAlign="center"
            title="We enable you to track your delivery package and get statistics on deliveries"
            lineHeight={18}
          />
        </View>
        <AppButton title="Next" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default,
  },
});

export default LandingScreen;
