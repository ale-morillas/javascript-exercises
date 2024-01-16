const removeFromArray = function (arr, ...args) {
  const arrCopy = [];

  arr.forEach((element) => {
    if (!args.includes(element)) {
      arrCopy.push(element);
    }
  });

  return arrCopy;
};

// Do not edit below this line
module.exports = removeFromArray;
