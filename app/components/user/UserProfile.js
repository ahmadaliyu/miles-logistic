import React, { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AppInput from "../../reusables/AppInput";
import AppSVG from "../../reusables/AppSVG";
import AppText from "../../reusables/AppText";
import Colors from "../../utils/Colors";
import Avatar from "../../../assets/images/avatar.svg";
import AppButton from "../../reusables/AppButton";

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppText
          title={"Update your profile and set your account preferences"}
          textAlign={"center"}
          mt={"3%"}
          lineHeight={18}
        />
        <AppSVG
          al={"center"}
          width={150}
          mt={"5%"}
          height={150}
          svgName={Avatar}
        />
        <AppButton
          title={"Edit"}
          width="20%"
          ml={"25%"}
          mv="0%"
          fontSize={10}
          pv="0.6%"
          color="danger"
        />
        <View
          style={{
            alignItems: "center",
            marginVertical: "10%",
          }}
        >
          <AppInput placeholder={"First Name"} />
          <AppInput mt={"5%"} placeholder={"Last Name"} />
          <AppInput mt={"5%"} placeholder={"Email Address"} />
          <AppInput mt={"5%"} placeholder={"Phone Number"} />
        </View>
        <AppButton color="rgbBlue" title={"Save"} onPress={() => {}} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default,
  },
});

export default UserProfile;
