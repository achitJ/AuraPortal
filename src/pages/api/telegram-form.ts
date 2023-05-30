import { NextApiRequest, NextApiResponse } from "next";
import { sendDataToTelegram } from "@/backend-services/telegram/telegram";
import { IContactForm } from "@/types/misc";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        //send data to telegram
        const data = req.body;
        data.dateTime = new Date(data.dateTime);
        sendDataToTelegram(data);
        return res.status(200).json({ message: 'OK', data });
    }

    return res.status(404).json({ message: 'Not Found' });
}