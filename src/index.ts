import 'dotenv/config'
import TelegramBot from "node-telegram-bot-api";
import {commandListener} from "./commands";

const token = process.env.TOKEN;

if (!token) {
    console.log('Bot Token was not found.');
    process.exit();
}

console.log('Configuration is OK.');

const bot = new TelegramBot(token, {polling: true});

commandListener(bot);