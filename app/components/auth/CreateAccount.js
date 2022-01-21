import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import AppInput from "../../reusables/AppInput";
import AppText from "../../reusables/AppText";
import Colors from "../../utils/Colors";
import EyeShow from "../../../assets/icons/eye-show.svg";
import GoogleIcon from "../../../assets/icons/google.svg";
import FacebookIcon from "../../../assets/icons/facebook.svg";
import TwitterIcon from "../../../assets/icons/twitter.svg";
import AppButton from "../../reusables/AppButton";
import { signup } from "../../redux/auth/authThunk";

const CreateAccount = ({ navigation: { navigate } }) => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <AppText
        title="Open your free account"
        fontFamily="NB"
        fontSize={20}
        lineHeight={28}
        mt={"2%"}
        mb={"2%"}
      />
      <AppInput mt={25} placeholder={"First Name"} />
      <AppInput mt={25} placeholder={"Last Name"} />
      <AppInput mt={25} placeholder={"Email Address"} />
      <AppInput mt={25} placeholder={"Password"} rightIcon={EyeShow} />
      <AppInput mt={25} placeholder={"Verify Password"} rightIcon={EyeShow} />
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
      <AppText
        fontSize={12}
        title={
          "By opening an account, you are accepting our Terms of Use and Privacy Policy"
        }
        width={"90%"}
        textAlign={"center"}
        lineHeight={18}
      />
      <AppButton
        onPress={() => dispatch(signup())}
        fontSize={16}
        mt="5%"
        title={"Open account"}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <AppText title={"Already have an account?"} />
        <TouchableOpacity onPress={() => navigate("login")}>
          <AppText
            title={"Login"}
            mv={"3%"}
            fontSize={16}
            color={Colors.twitterColor}
            fontFamily="NSB"
            ml={"6%"}
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
  },
});

export default CreateAccount;
