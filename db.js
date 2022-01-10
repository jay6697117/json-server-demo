const data = require('./data')();
console.log('data :>>\n ', data);

module.exports = () => {
  return {
    ...data
  };
};
