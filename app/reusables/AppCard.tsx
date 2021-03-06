import React from 'react'
import { View, TouchableHighlight, StyleSheet } from 'react-native'
import Colors from '../utils/Colors'
import { CARDPROPS } from '../helpers/utils/interface'

const AppCard = ({
  disabled,
  onPress,
  underlay = 'highlight',
  width = '90%',
  children,
  pv = '1%',
  ph = '4.5%',
  mv = '0.9%',
  alS,
  al,
  style,
  childStyle,
  background = 'default',
  ...otherProps
}: CARDPROPS) => {
  return (
    <TouchableHighlight
      {...otherProps}
      onPress={onPress}
      underlayColor={Colors[underlay]}
      disabled={disabled}
      style={[
        style,
        styles.touchable,
        {
          alignItems: al,
          width: width,
          paddingHorizontal: ph,
          paddingVertical: pv,
          marginVertical: mv,
          backgroundColor: Colors[background],
          alignSelf: alS,
        },
      ]}
    >
      <View style={childStyle}>{children}</View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  touchable: {
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 1,
    borderRadius: 10,
    // paddingHorizontal: "6.29%",
    width: '90%',
    marginVertical: '0.9%',
    paddingVertical: '0.5%',
  },
})

export default AppCard
