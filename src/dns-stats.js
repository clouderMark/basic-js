const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  try {
    let subArr = []
    for (let i = 0; i < domains.length; i++) {
      subArr.push(domains[i].split('.').reverse())//сделал все элементы массивами
    }
    subArr.sort((a, b) => a.length - b.length)//больший стал последним
    let quantity = subArr.flat().reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {})
    const result = {}
    const biggest = subArr.at(-1)
    let name = ''
    for (let i = 0; i < biggest.length; i++) {
      name += '.' + biggest[i]
      result[name] = quantity[biggest[i]]
    }
    return result
  } catch {
    return {}
  }
}

module.exports = {
  getDNSStats
};
