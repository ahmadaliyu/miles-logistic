import { Divider } from 'native-base'
import React from 'react'
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native'
import AppButton from '../../reusables/AppButton'
import AppCard from '../../reusables/AppCard'
import AppText from '../../reusables/AppText'
import Colors from '../../utils/Colors'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const RequestDetails = ({ route }) => {
  let pickupAddress = route.params?.pickupAddress
  let deliveryAddress = route.params?.deliveryAddress
  return (
    <View style={styles.container}>
      <ScrollView>
        <AppCard
          alS={'center'}
          mv="2%"
          pv="5%"
          style={{ height: HEIGHT / 2.7 }}
        >
          <AppText
            title="Pickup point details"
            //   color={Colors.facebookColor}
            fontSize={14}
            fontFamily="NSB"
          />
          <Divider marginY={2} />
          <TextInput
            style={{
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.mediumGrey,
              paddingTop: '3%',
            }}
            placeholder="First Name"
          />
          <TextInput
            style={{
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.mediumGrey,
              paddingTop: '3%',
            }}
            placeholder="Last Name"
          />
          <TextInput
            style={{
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.mediumGrey,
              paddingTop: '3%',
            }}
            placeholder="Email"
          />
          <TextInput
            style={{
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.mediumGrey,
              paddingTop: '3%',
            }}
            placeholder="Phone Number"
          />
          <AppText
            title={pickupAddress}
            fontSize={13}
            color={Colors.darkSecondary}
            mt="13%"
          />
        </AppCard>
        <AppCard alS={'center'} pv="5%" style={{ height: HEIGHT / 2.7 }}>
          <AppText
            title="Delivery point details"
            //   color={Colors.facebookColor}
            fontSize={14}
            fontFamily="NSB"
          />
          <Divider marginY={2} />
          <TextInput
            style={{
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.mediumGrey,
              paddingTop: '3%',
            }}
            placeholder="First Name"
          />
          <TextInput
            style={{
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.mediumGrey,
              paddingTop: '3%',
            }}
            placeholder="Last Name"
          />
          <TextInput
            style={{
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.mediumGrey,
              paddingTop: '3%',
            }}
            placeholder="Email"
          />
          <TextInput
            style={{
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.mediumGrey,
              paddingTop: '3%',
            }}
            placeholder="Phone Number"
          />
          <AppText
            title={deliveryAddress}
            fontSize={13}
            color={Colors.darkSecondary}
            mt="13%"
          />
        </AppCard>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '5%',
          }}
        >
          <AppButton title="Cancel" width={'35%'} fontSize={13} color="dim" />
          <AppButton title="Request" width={'35%'} fontSize={13} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default,
  },
})

export default RequestDetails
