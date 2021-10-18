const Bomber = require("../bomber");
const requestTypes = require("../../data-structures/requestTypes");

class CyberHeroBomber extends Bomber {
    constructor(phone){
        super(phone);
        this.data = false;
    }
    headers = {
    }
    requestType = requestTypes.get;
    static country = "RU";
    siteName = "cyber hero";
    delay = 31000;
    url = "https://cyberhero.tele2.ru/api/user/free-phone/"+this.phone;  
}
module.exports = CyberHeroBomber;