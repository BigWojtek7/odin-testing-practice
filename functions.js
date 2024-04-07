const capitalize = function (word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const reverseString = function (word) {
  return word.split("").reverse().join("");
};

export { capitalize, reverseString };
