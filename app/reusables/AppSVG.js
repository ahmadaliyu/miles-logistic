import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

const AppSVG = ({ style, svgName, ...props }) => {
  return (
    <View style={[style]}>
      <SvgXml {...props} xml={svgName} />
    </View>
  );
};

export default AppSVG;
