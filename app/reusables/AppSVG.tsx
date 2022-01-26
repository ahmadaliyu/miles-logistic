import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { SVGPROPS } from "../helpers/utils/interface";




const AppSVG = (props: SVGPROPS) : JSX.Element =>  {
  // { style, svgName, al, ml, mr, mb, mt, ...props }
  const {...rest} = props
  return (
    <View
      style={[
        props.style,
        {
          ...rest
        },
      ]}
    >
      <SvgXml {...rest}  xml={props.svgName} />
    </View>
  );
};

export default AppSVG;
