const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(string1, string2) {
  let arrayOfString1 = string1.split('');
  let arrayOfString2 = string2.split('');

  return arrayOfString1.reduce((prev, cur) => {
    if (arrayOfString2.indexOf(cur) >= 0) {
      arrayOfString2.splice(arrayOfString2.indexOf(cur), 1);
      prev++;
    }

    return prev;
  }, 0);
}

module.exports = {
  getCommonCharacterCount,
};
