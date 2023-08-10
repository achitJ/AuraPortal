import { DateValue } from "../../node_modules_bak/@mantine/dates/lib";

export interface IContactForm {
    name: string;
    email: string;
    message: string;
    phone: string;
    dateTime: DateValue;
};

export interface IContactItem {
    icon: React.FC<any>;
	title: React.ReactNode;
	description: string;
    link?: string;
    target?: string;
    copy?: boolean;
}