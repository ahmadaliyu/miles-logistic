import React from "react";
import { Text, View } from "react-native";

function AppText({
  title,
  color = "#333333",
  fontSize = 14,
  textAlign,
  width,
  m,
  mv,
  mh,
  ml,
  mr,
  mt,
  mb,
  style,
  fontFamily = "NR",
  lineHeight = 18,
  alignItems,
  textStyle,
  ...otherProps
}) {
  return (
    <View
      style={[
        otherProps.style,
        style,
        {
          alignItems: alignItems,
          margin: m,
          marginVertical: mv,
          marginHorizontal: mh,
          marginLeft: ml,
          marginRight: mr,
          marginTop: mt,
          marginBottom: mb,
          width: width,
        },
      ]}
    >
      <Text
        style={[
          { ...otherProps },
          {
            color: color,
            fontSize: fontSize,
            textAlign: textAlign,
            fontFamily: fontFamily,
            lineHeight: lineHeight,
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
}

export default AppText;
