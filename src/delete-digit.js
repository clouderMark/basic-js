const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString().split('')
  let n1 = n.slice(0)
  let n2 = n.slice(0)//этот по возрастанию

  n2.sort((a, b) => a - b)
  n1.splice(n1.indexOf(n2[0]), 1)
  n.splice(n.indexOf(n2[1]), 1)
 return n > n1 ? +n.join('') : +n1.join('')
}

module.exports = {
  deleteDigit
};
