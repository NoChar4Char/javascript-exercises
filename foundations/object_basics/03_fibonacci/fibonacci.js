const fibonacci = function(x) {
  if (Number.isNaN(x) || x < 0) {
    return "OOPS"
  }

  const arr = [0, 1]
  if (x == 0 || x == 1) {
    return arr[x];
  }

  for (let i = 2; i <= x; i++) {
    arr.push(arr[i-1] + arr[i-2])
  }

  return arr[x]
};

// Do not edit below this line
module.exports = fibonacci;
