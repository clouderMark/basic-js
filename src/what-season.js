const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const year = ['winter', 'spring', 'summer', 'fall']

  if (!date) {
    return 'Unable to determine the time of year!'
  }

  try {
    date.toLocaleDateString()
  } catch {
    throw new Error('Invalid date!')
  }
  if (date instanceof Date) {
    
    let month = date.getMonth()
    if (month >= 0 && month <= 1 || month === 11) {
      return year[0]
    }
    if (month >= 2 && month <= 4) {
      return year[1]
    }
    if (month >= 5 && month <= 7) {
      return year[2]
    }
    if (month >= 8 && month <= 10) {
      return year[3]
    }
    if (date.toString() == date) {
      throw new Error('Invalid date!')
    }
  } else {
    throw new Error('Invalid date!')
  }
}


module.exports = {
  getSeason
};
