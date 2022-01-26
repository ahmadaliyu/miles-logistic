import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../reusables/AppText";
import Colors from "../utils/Colors";

const Notifications = () => {
  return (
    <View style={styles.container}>
      <AppText title="Notifications"  />
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

export default Notifications;
