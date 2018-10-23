const m = require('./memory.js');
const er = require('./event-reciever.js');
const dm = require('./decision-maker.js');
const fr = require('./feedback-reciever.js');

function isFigureGreaterThenFive(fig, dec) {
    console.log('For event '+fig+', it should be '+dec);
    er(fig);
    console.log('Event '+fig+' recieved: ', m);
    dm(fig);
    console.log('Decision made for '+fig+': '+ m[fig][0]);
    fr(fig, dec);
    console.log('Feedback '+dec+' given to '+fig+': '+ m[fig][1]);
    er(fig);
    console.log('Event '+fig+' recieved: ', m);
    dm(fig);
    console.log('Decision made for '+fig+': '+ m[fig][0]);
}


isFigureGreaterThenFive(1, -1);
isFigureGreaterThenFive(7, 1);



