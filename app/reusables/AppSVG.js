import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

const AppSVG = ({ style, svgName, al, ml, mr, mb, mt, ...props }) => {
  return (
    <View
      style={[
        style,
        {
          alignItems: al,
          marginLeft: ml,
          marginRight: mr,
          marginTop: mt,
          marginBottom: mb,
        },
      ]}
    >
      <SvgXml {...props} xml={svgName} />
    </View>
  );
};

export default AppSVG;
