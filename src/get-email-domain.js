const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arrayOfEmail = email.split('');
  let domain;
  for (let i = 0; i < arrayOfEmail.length; i++) {
    if (arrayOfEmail[i] == '@') {
      domain = arrayOfEmail.slice(i + 1);
    }
  }

  return domain.join('');
}

module.exports = {
  getEmailDomain,
};
