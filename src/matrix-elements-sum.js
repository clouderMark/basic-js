const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const nulPosition = []
  for (let i = 0; i < matrix.length; i++) {
    const sub = []
    for (let u = 0; u < matrix[i].length; u++) {
      let elBefore = (i + 1) * matrix[i].length
      if (matrix[i][u] === 0) {
        sub.push(u + elBefore)
      }
    }
    nulPosition.push(sub)
  }
  nulPosition.splice(-1,1)
  let indexForDel = nulPosition.flat()
  let flatMatrix = matrix.flat()
  let result = 0
  for (let i = 0; i < flatMatrix.length; i++) {
    if (!indexForDel.includes(i)) {
      result += flatMatrix[i]
    }
  }
  return result
}

module.exports = {
  getMatrixElementsSum
};
