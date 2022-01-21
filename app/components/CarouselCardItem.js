import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import AppSVG from "../reusables/AppSVG";
import AppText from "../reusables/AppText";
import Colors from "../utils/Colors";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <AppSVG svgName={item.imgUrl} width={260} height={260} al={"center"} />
      <AppText
        color="#4267B2"
        color={Colors.primary}
        title={item.title}
        fontFamily="NB"
        fontSize={18}
        ml="7%"
      />
      <AppText
        color="#7A7A7A"
        title={item.body}
        fontSize={14}
        lineHeight={18}
        mt="2%"
        ml="7%"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  //   container: {
  //     backgroundColor: "white",
  //     borderRadius: 8,
  //     width: ITEM_WIDTH,
  //     paddingBottom: 40,
  //     shadowColor: "#000",
  //     shadowOffset: {
  //       width: 0,
  //       height: 3,
  //     },
  //     shadowOpacity: 0.29,
  //     shadowRadius: 4.65,
  //     elevation: 7,
  //   },
  body: {
    color: "#222",
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CarouselCardItem;
