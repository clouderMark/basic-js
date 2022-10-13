const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = []
  let obj = names.reduce((acc, v, i) => (v in acc ? acc[v].push(i) : acc[v] = [i], acc), {});
  let count = 1
  for (let str of names) {
    if (obj[str].length > 1) {
      result.push(str + `(${counter()})`)
    } else {
      if (!result.includes(str)) {
        result.push(str)
      } else {
        result.push(str + `(${count++})`)
      }
    }
  }
  let x = '\.(0.\)'
  let rExp = new RegExp(x, 'g')

  return result.map(function (x) { return x.replace(rExp, ''); });
}

function makeCounter() {
  let currentCount = 0;

  return function () {
    return currentCount++;
  };
}

let counter = makeCounter()

module.exports = {
  renameFiles
};
