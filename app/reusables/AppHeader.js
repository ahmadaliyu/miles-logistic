import React from "react";
import { View, TouchableOpacity } from "react-native";
import AppSVG from "../reusables/AppSVG";
import AppText from "../reusables/AppText";
import Colors from "../utils/Colors";

const AppHeader = ({
  title,
  headerImage,
  leftButton,
  rightButton,
  onPressLeft,
  onPressRight,
  username,
  leftButtonPng,
  textSize = 16,
  fontFamily = "NSB",
  textColor = "#333333",
  mv,
  mh,
  ml,
  mr,
  mt,
  mb,
  pt = "8%",
  child,
  imageHeight,
  imageWidth,
  styleV,
  ...props
}) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: Colors.default,
          paddingTop: pt,
          paddingHorizontal: "5.86666%",
          paddingBottom: "3.23%",
          width: "100%",
        },
        styleV,
      ]}
    >
      {leftButtonPng ? (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: "-3%",
            }}
          >
            {leftButtonPng && <View>{leftButtonPng}</View>}
            {username && (
              <AppText
                color={Colors.mediumDark}
                fontFamily="Nunito-Bold"
                title={username}
                ml="3%"
              />
            )}
          </View>
        </View>
      ) : (
        <TouchableOpacity activeOpacity={0.7} onPress={onPressLeft}>
          {leftButton && <AppSVG svgName={leftButton} />}
        </TouchableOpacity>
      )}
      {headerImage ? (
        <AppSVG
          style={{ alignItems: "center", justifyContent: "center" }}
          svgName={headerImage}
          height={30}
        />
      ) : (
        <AppText
          title={title}
          fontSize={textSize}
          fontFamily={fontFamily}
          color={textColor}
          textStyle={{ marginBottom: "1.25%" }}
        />
      )}
      {/* <TouchableOpacity
        activeOpacity={2}
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={onPressRight}
      >
        {rightButton && <View>{rightButton}</View>}
      </TouchableOpacity> */}
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        activeOpacity={0.7}
        onPress={onPressRight}
      >
        {rightButton && <AppSVG svgName={rightButton} width={30} height={30} />}
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;
