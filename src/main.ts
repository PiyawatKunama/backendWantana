import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const PORT = process.env.PORT;

const https = require('https');
const express = require('express');
const lineApp = express();
const TOKEN =
  '4q3VKFP+VtVmHbT3pwi1NMBfS0XM/+mOsl/pjGi8706ZTZnfTzU/xApq8cGDCeTo7NPe8vMz4DNIOuncCHbvMnvOXuvPQ0enwcmmhgUFBP69jDS43cKrNK3zGQZ7aARoy55SOfFttTqsicRpJzrMbAdB04t89/1O/w1cDnyilFU=';

lineApp.use(express.json());
lineApp.use(
  express.urlencoded({
    extended: true,
  }),
);

lineApp.get('/', (req, res) => {
  res.sendStatus(200);
});

lineApp.post('/webhook', function (req, res) {
  res.send('https://linewantana.herokuapp.com/webhook');

  if (req.body.events[0].type === 'follow') {
    console.log('jimmy', req.body.events[0].source.userId);
    console.log('jimmy', req);
  }

  // If the user sends a message to your bot, send a reply message
  if (req.body.events[0].type === 'message') {
    // Message data, must be stringified
    const dataString = JSON.stringify({
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

    // Request header
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + TOKEN,
    };

    // Options to pass into the request
    const webhookOptions = {
      hostname: 'api.line.me',
      path: '/v2/bot/message/push',
      method: 'POST',
      headers: headers,
      body: dataString,
    };

    // Define request
    const request = https.request(webhookOptions, (res) => {
      res.on('data', (d) => {
        process.stdout.write(d);
      });
    });

    // Handle error
    request.on('error', (err) => {
      console.error(err);
    });

    // Send data
    request.write(dataString);
    request.end();
  }
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
