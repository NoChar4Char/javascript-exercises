const repeatString = function(s, times) {
  let newString = "";
  for (let i = 0; i < times; i++) {
    newString += s;
  }

  return times < 0 ? "ERROR" : newString;
}

// Do not edit below this line
module.exports = repeatString;
