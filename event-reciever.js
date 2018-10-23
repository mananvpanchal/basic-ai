const memory = require('./memory.js');

module.exports = (function (m) {

    return function (e) {
        if(m[e] === undefined) {
            m[e] = null;
        }
    };

})(memory);