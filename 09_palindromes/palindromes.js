const palindromes = function (string) {
  let str = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "").toLowerCase();
  let strArr = str.split("").reverse().join("");

  return strArr === str;
};

// Do not edit below this line
module.exports = palindromes;
