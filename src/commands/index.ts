import TelegramBot from "node-telegram-bot-api";

import {addressListener} from "./address";

export const commandListener = (bot: TelegramBot) => {
    addressListener(bot);
}