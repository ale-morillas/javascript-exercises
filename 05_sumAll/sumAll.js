const sumAll = function (n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number" || n1 < 0 || n2 < 0) {
    return "ERROR";
  }
  const diff = Math.abs(n2 - n1) + 1;
  let sum = 0;

  for (let i = 1; i <= diff; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
