const palindromes = function (s) {
  cleanedStr = s.toLowerCase()
  s = ""
  for (let c of cleanedStr) {
    if (c != ' ' && c != '.' && c != ',' && c != '!') {
      s += c
    }
  }

  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] != s[s.length - 1 - i]) return false
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
