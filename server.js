const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);
const EventEmitter = require('events');
const activate = require("./processes/activate");

global.eventEmitter = new EventEmitter();

require('dotenv').config();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const {phone} = require('phone');


http.listen(port, async () => {
    console.log(`Server started on port ${port}`);
});

var phones = [];
app.post('/start/:apiKey', async (req, res) => {
    if(process.env.API_KEY == req.params.apiKey){
        const phoneNum = req.body.phone;
        const { minutes, smsPerSecond } = req.body;
        const data = phone(phoneNum);

        if(!data.isValid) return res.status(400).send("Invalid phone.");
        if(phones.find(phone) != null) return res.status(400).send("Phone exists.");
        await activate(phoneNum, minutes, data.countryIso2, smsPerSecond);
        phones.push(phoneNum);
        return res.json("Ok");
    } else res.status(403).send("Invalid api key.");
});
app.post('/stop/:apiKey', async (req, res) => {
    if(process.env.API_KEY == req.params.apiKey){  
        const phoneNum = req.body.phone;    
        if(typeof phoneNum != "string" && phoneNum.length >= 20) return res.status(400).send("Invalid phone.");
        if(phones.filter(p=>p==phoneNum).length == 0) return res.status(400).send("Phone not defined.");
        global.eventEmitter.emit('off', phoneNum);
        phones = phones.filter(p => p != phoneNum);
        return res.json("Ok");
    } else res.status(403).send("Invalid api key.");
});