import { Stack } from '@mantine/core';
import ContactIcon from './ContactIcon';
import { IContactIconsListProps } from '@/types/props';

export function ContactIconsList({ data }: IContactIconsListProps) {
    const items = data.map((item, idx) => {
        return <ContactIcon key={idx} contactItem={item} />
    });

    return <Stack>{items}</Stack>;
}