import { IContactForm } from "@/types/misc";

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

const bot = new TelegramBot(token, { polling: false });

export function sendDataToTelegram(data: IContactForm) {
    bot.sendMessage(
        chatId, 
        `Name: ${data.name}\nPhone:${data.phone}\nEmail: ${data.email}\nDate of Birth: ${data.dateTime.toLocaleDateString()}\nTime of Birth: ${data.dateTime.toLocaleTimeString()}\nMessage: ${data.message}`
    );
};