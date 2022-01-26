import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../reusables/AppText";
import Colors from "../utils/Colors";

const Settings = () => {
  return (
    <View style={styles.container}>
      <AppText title="Settings"  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Settings;
