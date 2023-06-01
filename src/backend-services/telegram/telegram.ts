import { IContactForm } from "@/types/misc";

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

const bot = new TelegramBot(token, { polling: false });

export async function sendDataToTelegram(data: IContactForm) {
    try {
        const res = await bot.sendMessage(
            chatId, 
            `Name: ${data.name}\nPhone:[${data.phone}](tel: ${data.phone})\nEmail: ${data.email}\nDate of Birth: ${data.dateTime.toLocaleDateString()}\nTime of Birth: ${data.dateTime.toLocaleTimeString()}\nMessage: ${data.message}`
        );

        return res;
    } catch(error) {
        return new Error('Failed to fetch data');
    }
};