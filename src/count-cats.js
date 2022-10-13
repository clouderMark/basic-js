const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(backyard) {
  let cats = 0
  let row
  for (let r = 0; r < backyard.length; r++) {
      row = backyard[r]
      for (let i = 0; i < row.length; i++) {
          if (row[i] == '^^') {
              cats++
          }
      }
  }
  return cats
}

module.exports = {
  countCats
};
