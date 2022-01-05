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
  //   height = 4,
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
  indicator,
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
          width: width,
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
      {iconName && <AppSVG svgName={iconName} style={styles.icon} />}
      {indicator ? (
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
    justifyContent: "center",
    marginVertical: "5%",
  },
  icon: {
    marginHorizontal: "10%",
    marginLeft: "3%",
  },
  eText: {
    fontFamily: "NSB",
    color: Colors.default,
    lineHeight: 20,
  },
});

export default AppButton;
