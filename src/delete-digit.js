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
function deleteDigit(number) {
  let maxNumber = 0;
  for (let i = 0; i < number.toString().length; i++) {
    let currentNumber = number.toString().split('');
    +currentNumber.splice(i, 1);
    if (+currentNumber.join('') > maxNumber) {
      maxNumber = +currentNumber.join('');
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit,
};
