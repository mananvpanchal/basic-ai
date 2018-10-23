const memory = require('./memory.js');

module.exports = (function (m) {

    return function (e, f) {
        m[e][1] = f;
    };
    
})(memory);