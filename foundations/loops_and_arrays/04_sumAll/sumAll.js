const sumAll = function(start, end) {
  // HPC rah
  if (typeof start !== "number" || typeof end !== "number" || start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) 
    return 'ERROR';
  return (end+start) / 2 * (Math.abs(end - start) + 1);
};

// Do not edit below this line
module.exports = sumAll;
