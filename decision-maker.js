const memory = require('./memory.js');

module.exports = (function (m) {

    function randomChoice() {
        if(Math.random() < 0.5) {
            return [ -1, null ];
        } else {
           return [ 1, null ];
        }
    }

    return function (e) {
        if(m[e] === null) {
            m[e] = randomChoice();
        } else {
            if(m[e][0] !== m[e][1]) {
                m[e][0] = m[e][0] * -1;
            }
        }
    };
    
})(memory);