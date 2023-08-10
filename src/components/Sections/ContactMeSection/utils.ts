import { IFormArgs, IUseFormReturnType } from "@/types/useForm";
import { IContactForm } from "@/types/misc";
import { sendFormDataToTelegram } from '@/api/telegram';
import { notifications } from '@mantine/notifications';

export const formMetadata: IFormArgs<IContactForm> = {
    initialValues: {
        name: '',
        phone: '',
        email: '',
        message: '',
        dateTime: null,
    },

    validate: {
        name: (value: string) => value.trim().length > 0 ? null : 'Name is required',
        phone: (value: string) => value.trim().length > 0 ? null : 'Phone is required',
        email: (value: string) => {
            if(!value.trim().length) return 'Email is required';

            //check if email is valid
            const emailRegex = /\S+@\S+\.\S+/;
            return emailRegex.test(value) ? null : 'Enter Valid Email';
        },
        message: (value: string) => value.trim().length > 0 ? null : 'Message is required',
        dateTime: (value : Date | null) => {
            //checks if date is less than today
            if (value) {
                return  value.getTime() <= new Date().getTime() ? null : 'Enter Valid Date';
            }
            return "Date and Time is required";
        }
    }
}

export function getHandler(form: IUseFormReturnType<IContactForm>) {
    return (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        form.validateAll();
        if(form.isValid()) {
            sendFormDataToTelegram(form.getValues())
            .then((data) => {
                if(data.message === "OK") {
                    notifications.show({
                        title: 'Message Sent',
                        message: 'Your message has been sent successfully',
                        color: 'teal',
                        icon: null,
                        autoClose: 1000,
                    })
                }
            })
            .catch((error) => {
                notifications.show({
                    title: 'Error Sending Message',
                    message: 'Please try again later',
                    color: 'red',
                    icon: null,
                    autoClose: 2000,
                })
            });
            form.resetAll();
        }
    }
}