import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../utils/Colors";
import AppSVG from "./AppSVG";

function AppButton({
  title,
  onPress,
  color = "primary",
  textColor = "default",
  borderColor,
  borderWidth,
  width = "80%",
  height,
  fontSize = 18,
  mr,
  ml,
  mt,
  mb,
  mv = "4%",
  pv = "3%",
  size,
  style,
  styleV,
  iconName,
  innerIcon,
  iconHeight = 15,
  iconWidth = 15,
  indicator,
  borderRadius = 5,
  alignSelf = "center",
  fontFamily = "NSB",
  ...otherprops
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      {...otherprops}
      style={[
        styles.button,
        styleV,
        {
          backgroundColor: Colors[color],
          borderColor: borderColor,
          borderWidth,
          borderRadius: borderRadius,
          width: width,
          height: height,
          alignSelf: alignSelf,
          paddingVertical: pv,
          marginLeft: ml,
          marginRight: mr,
          marginTop: mt,
          marginBottom: mb,
          marginVertical: mv,
        },
      ]}
      onPress={onPress}
    >
      {innerIcon && <AppSVG svgName={innerIcon} width={15} height={15} />}
      {iconName ? (
        <AppSVG svgName={iconName} width={iconWidth} height={iconHeight} />
      ) : indicator ? (
        <View>{indicator}</View>
      ) : (
        <Text
          style={[
            styles.eText,
            {
              fontSize: fontSize,
              color: Colors[textColor],
              fontFamily,
            },
            style,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    // marginVertical: "5%",
  },

  eText: {
    fontFamily: "NSB",
    color: Colors.default,
    lineHeight: 20,
  },
});

export default AppButton;
