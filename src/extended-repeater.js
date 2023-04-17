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
function repeater(string, options) {
  let array = [];
  for (
    let i = 0;
    i < ('repeatTimes' in options ? options.repeatTimes : 1);
    i++
  ) {
    array.push(String(string));
    for (
      let j = 0;
      j < ('additionRepeatTimes' in options ? options.additionRepeatTimes : 1);
      j++
    ) {
      array.push('addition' in options ? String(options.addition) : '');
      if (j < options.additionRepeatTimes - 1) {
        array.push(
          'additionSeparator' in options ? options.additionSeparator : '|'
        );
      }
    }
    if (i < options.repeatTimes - 1) {
      array.push('separator' in options ? options.separator : '+');
    }
  }

  return array.join('');
}

module.exports = {
  repeater,
};
