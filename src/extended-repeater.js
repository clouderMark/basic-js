const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = str ? str + '' : String(str)
  let separator = 'separator' in options ? options.separator : '+',
    repeatTimes = 'repeatTimes' in options ? options.repeatTimes : 1,
    addition = ''
  if ('addition' in options) {
    if (options.addition === true) {
      addition = options.addition.toString()
    } else {
      addition = String(options.addition)
    }
  }
  let additionSeparator = ''
  if ('additionRepeatTimes' in options && options.additionRepeatTimes > 1) {
    additionSeparator = 'additionSeparator' in options ? options.additionSeparator : '|'
  }
  let additionRepeatTimes = 'additionRepeatTimes' in options ? options.additionRepeatTimes : 1,
    result = (str + ((addition + additionSeparator).repeat(additionRepeatTimes).substr(0, (addition.length + additionSeparator.length) * additionRepeatTimes - additionSeparator.length)) + separator).repeat(repeatTimes)
  return result.slice(0, -separator.length)
}

module.exports = {
  repeater
};
