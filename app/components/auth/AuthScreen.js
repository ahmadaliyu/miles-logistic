import React, { useState } from "react";
import { useSelector } from "react-redux";
import AuthStackNavigator from "../../navigation/AuthStackNavigator";
import RootStackNavigator from "../../navigation/RootStackNavigator";

const AuthScreen = () => {
  const userRepresentation = useSelector(
    (state) => state.authSlice.userRepresentation,
  );

  if (Object.entries(userRepresentation).length === 0) {
    return <AuthStackNavigator />;
  } else {
    return <RootStackNavigator />;
  }
};

export default AuthScreen;
