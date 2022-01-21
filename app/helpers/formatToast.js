import Toast from "react-native-toast-message";

export const formatToast = (subTitle, type = "error") => {
  return Toast.show({
    type: `${type}`,
    props: {
      onPress: () => {
        Toast.hide();
      },
      subTitle: `${subTitle}`,
    },
  });
};
