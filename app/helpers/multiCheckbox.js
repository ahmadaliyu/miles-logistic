import Toast from "react-native-toast-message";
/**
 * Toggles a single checkbox item from a list of multiple checkboxes from a FlatList.
 *
 * @param  {function} setState setState function that holds the initial list
 *
 * @param {object}  item            checkbox item from the List (Note that each item must contain "checked" and "id" field).
 */
export const multiCheckbox = (setState, item, total) => {
  if (total) {
    if (total >= 2 && !item.checked) {
      Toast.show({
        type: "info",
        props: {
          onPress: () => {
            Toast.hide();
          },
          subTitle: "You can only select one vehicle for now",
        },
      });
      return;
    }
  }
  setState((prevState) => {
    const removedItemIndex = prevState.findIndex((elem) => elem.id == item.id);
    item["checked"] = !item["checked"];
    prevState.splice(removedItemIndex, 1);
    return prevState.concat(item);
  });
};
