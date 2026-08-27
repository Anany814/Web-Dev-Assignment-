function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

function describeNumber(num) {
  if (isEven(num)) {
    return num + ' is an EVEN number';
  }
  return num + ' is an ODD number';
}

module.exports = { isEven, isOdd, describeNumber };
