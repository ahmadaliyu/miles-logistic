import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../utils/Colors";
import AppButton from "./AppButton";
import AppSVG from "./AppSVG";

function AppInput({
  iconName,
  smallBtn,
  onPressSmallBtn,
  rightIcon,
  placeholderTextColor = "#7A7A7A",
  textAlign,
  textWidth = "75%",
  width = "85%",
  height,
  style,
  mv,
  ml,
  mr,
  mb,
  mt,
  m,
  pv,
  ML,
  rIconWidth = 25,
  rIconHeight = 25,
  marginHorizontal,
  onPressRightIcon,
  textSize = 16,
  fontFamily,
  styley,
  placeholder,
  ...otherProps
}) {
  return (
    <View
      style={[
        styles.textInput,
        style,
        {
          width,
          height,
          margin: m,
          marginHorizontal,
          marginVertical: mv,
          marginLeft: ml,
          marginRight: mr,
          marginBottom: mb,
          marginTop: mt,
          paddingVertical: pv,
          ...otherProps,
        },
      ]}
    >
      {iconName && <AppSVG svgName={iconName} style={[styles.icon, styley]} />}
      <TextInput
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        style={[
          styles.inputName,
          {
            fontSize: textSize,
            width: textWidth,
            fontFamily: fontFamily,
            marginLeft: ML,
          },
        ]}
        textAlign={textAlign}
        {...otherProps}
      />
      {smallBtn && (
        <AppButton
          onPress={onPressSmallBtn}
          title="All"
          color="grey"
          width="18%"
          mt="4.5%"
        />
      )}
      {rightIcon && (
        <TouchableOpacity
          style={{ marginLeft: "15%" }}
          onPress={onPressRightIcon}
          activeOpacity={0.8}
        >
          <AppSVG svgName={rightIcon} height={rIconWidth} width={rIconHeight} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.default,
    padding: "2%",
    borderRadius: 6,
    borderColor: "#B5B5B5",
    borderWidth: 1,
  },
  icon: {
    marginHorizontal: "5%",
    marginLeft: "2%",
  },
  inputName: {
    // width: '100%',
    fontFamily: "NR",
    fontSize: 16,
    color: Colors.dark,
  },
});

export default AppInput;
