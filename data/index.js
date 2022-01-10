
const module1 = require('./module1')()

console.log('module1 :>>\n ', module1);

module.exports = () => {
    return {
        ...module1

    }
}
