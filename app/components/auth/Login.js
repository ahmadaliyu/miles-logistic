import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import AppInput from "../../reusables/AppInput";
import AppText from "../../reusables/AppText";
import Colors from "../../utils/Colors";
import EyeShow from "../../../assets/icons/eye-show.svg";
import GoogleIcon from "../../../assets/icons/google.svg";
import FacebookIcon from "../../../assets/icons/facebook.svg";
import TwitterIcon from "../../../assets/icons/twitter.svg";
import AppButton from "../../reusables/AppButton";
import { login } from "../../redux/auth/authThunk";
import { useDispatch } from "react-redux";

const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <AppText
        title="Login to your account"
        fontFamily="NB"
        fontSize={20}
        mb={"7%"}
      />
      <AppInput mt={25} placeholder={"Email Address"} />
      <AppInput mt={25} placeholder={"Password"} rightIcon={EyeShow} />
      <AppText title={"Or"} mt="7%" />
      <View
        style={{
          flexDirection: "row",
          marginTop: "3%",
        }}
      >
        <AppButton
          color={"googleColor"}
          iconName={GoogleIcon}
          width="26%"
          pv="3.8%"
          mr={"3%"}
        />
        <AppButton
          color={"facebookColor"}
          iconName={FacebookIcon}
          width="26%"
          pv="3.8%"
        />
        <AppButton
          color={"twitterColor"}
          iconName={TwitterIcon}
          width="26%"
          pv="3.8%"
          ml={"3%"}
        />
      </View>
      <AppButton
        onPress={() => dispatch(login())}
        fontSize={16}
        mt="10%"
        title={"Login"}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <AppText title={"Forgot password?"} />
        <TouchableOpacity>
          <AppText
            title={"Reset it here"}
            mv={"3%"}
            fontSize={16}
            color={Colors.twitterColor}
            fontFamily="NSB"
            ml={"6%"}
            textDecorationLine="underline"
            textDecorationColor={Colors.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.default,
    paddingVertical: "20%",
  },
});

export default Login;
