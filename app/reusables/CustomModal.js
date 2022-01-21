import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import Colors from "../utils/Colors";

export const DEVICE_WIDTH = Dimensions.get("window").width + 80;

function CustomModal({
  isVisible,
  onSwipeComplete,
  children,
  onBackdropPress,
}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Modal
        onSwipeComplete={onSwipeComplete}
        onBackdropPress={onBackdropPress}
        swipeDirection={"down"}
        isVisible={isVisible}
        backdropColor={Colors.primary}
      >
        <View style={[styles.border, { height: "80%" }]}>
          <View
            style={{ flex: 1, marginHorizontal: "7.3333%", marginTop: "3%" }}
          >
            <View>
              <View
                style={{
                  backgroundColor: Colors.grey,
                  width: 25,
                  height: 4.2,
                  borderRadius: 5,
                  alignSelf: "center",
                }}
              ></View>
            </View>
            <View style={styles.inside}>{children}</View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    backgroundColor: Colors.default,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  inside: {
    flex: 1,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default CustomModal;
