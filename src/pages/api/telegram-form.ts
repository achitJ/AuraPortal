import { NextApiRequest, NextApiResponse } from "next";
import { sendDataToTelegram } from "@/backend-services/telegram/telegram";
import { IContactForm } from "@/types/misc";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST' && (req.body as IContactForm).name) {
        try {
            //send data to telegram
            const data = req.body;
            data.dateTime = new Date(data.dateTime);
            const response = await sendDataToTelegram(data);
            return res.status(200).json({ message: 'OK', data, response });
        } catch(error) {
            return res.status(500).json({ message: 'Internal Server Error', error });
        }
    }

    return res.status(404).json({ message: 'Not Found' });
}