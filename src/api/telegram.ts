import { IContactForm } from "@/types/misc";

export async function sendFormDataToTelegram(data: IContactForm) {
    const dataToSend = JSON.stringify(data);
    const res = await fetch('/api/telegram-form', {
        method: 'POST',
        body: dataToSend,
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (res.status !== 200) {
        return new Error('Failed to fetch data');
    }

    return res.json();
}