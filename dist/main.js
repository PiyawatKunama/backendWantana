"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const PORT = process.env.PORT;
const https = require('https');
const express = require('express');
const appOriginal = express();
const TOKEN = '4q3VKFP+VtVmHbT3pwi1NMBfS0XM/+mOsl/pjGi8706ZTZnfTzU/xApq8cGDCeTo7NPe8vMz4DNIOuncCHbvMnvOXuvPQ0enwcmmhgUFBP69jDS43cKrNK3zGQZ7aARoy55SOfFttTqsicRpJzrMbAdB04t89/1O/w1cDnyilFU=';
appOriginal.use(express.json());
appOriginal.use(express.urlencoded({
    extended: true,
}));
appOriginal.get('/', (req, res) => {
    res.sendStatus(200);
});
appOriginal.get('/webhook', function (req, res) {
    res.send('https://linewantana.herokuapp.com/webhook');
    console.log(req);
});
appOriginal.post('/webhook', function (req, res) {
    res.send('https://linewantana.herokuapp.com/webhook');
    if (req.body.events[0].type === 'follow') {
        console.log('jimmy', req.body.events[0].source.userId);
        console.log('jimmy', req);
    }
    if (req.body.events[0].type === 'message') {
        const body = JSON.stringify({
            replyToken: req.body.events[0].replyToken,
            messages: [
                {
                    type: 'text',
                    text: 'Hello, user',
                },
                {
                    type: 'text',
                    text: 'May I help you?',
                },
            ],
        });
        const headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + TOKEN,
        };
        const request = https.request({
            hostname: 'api.line.me',
            path: '/v2/bot/message/push',
            method: 'POST',
            headers,
            body,
        }, (res) => {
            res.on('data', (d) => {
                process.stdout.write(d);
            });
        });
        request.on('error', (err) => {
            console.error(err);
        });
        request.write(body);
        request.end();
    }
});
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map