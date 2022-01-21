export function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
