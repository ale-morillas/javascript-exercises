const reverseString = function (str) {
  const stringArray = str.split("");
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += stringArray[i];
  }

  return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
