import React from "react";
import { Text, View } from "react-native";
import { TEXTPROPS } from "../helpers/utils/interface";

const AppText = (
  {title , width, color = "#333333", fontSize = 16,textAlign,fontFamily = "NR", lineHeight = 18, style, alignItems, m, mv, mh, ml, mr, mt, mb, ...otherProps}
  
 : TEXTPROPS) => {
  return (
    <View
      style={[
        otherProps,
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
          ...otherProps
        },
      ]}
    >
      <Text
        style={[
          { ...otherProps.textStyle },
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
