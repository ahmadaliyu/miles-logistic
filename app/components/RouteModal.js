import React, { useState } from "react";
import { View } from "react-native";
import CustomModal from "../reusables/CustomModal";

const RouteModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      <CustomModal
        onPress1={toggleModal}
        onPress2={toggleModal}
        isVisible={isModalVisible}
        onSwipeComplete={() => setModalVisible(false)}
      />
    </View>
  );
};

export default RouteModal;
