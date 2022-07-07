// Write a test that checks the callback of an uppercase function, which turns the letters of a word into uppercase letters. Remember to beware of false-positives in asynchronous tests.

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

module.exports = uppercase;
