const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  let result;
  if (typeof sampleActivity === 'string') {
    if (sampleActivity / 1 === NaN) {
      result = false
    } else {
      if (sampleActivity / 1 > 0 && sampleActivity <= 15) {
        result = (Math.log(15 / sampleActivity))/(0.693/HALF_LIFE_PERIOD)
        result = Math.ceil(result)
      } else {
        result = false
      }
    }
  } else {
    result = false
  }
  return result
}

module.exports = {
  dateSample
};
