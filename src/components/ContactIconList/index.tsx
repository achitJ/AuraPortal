import { Stack } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt, IconBrandWhatsapp } from '@tabler/icons-react';
import ContactIcon from './ContactIcon';
import { IContactIconsListProps } from '@/types/props';

const MOCKDATA = [
    { title: 'Email', description: 'anamikajyotish25@gmail.com', icon: IconAt },
    { title: 'Phone / Whatsapp', description: '+91 95608 40401', icon: IconBrandWhatsapp },
    { title: 'Address', description: '844 Morris Park avenue', icon: IconMapPin },
    { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: IconSun },
];

export function ContactIconsList({ data = MOCKDATA }: IContactIconsListProps) {
    const items = data.map((item, index) => {
        return <ContactIcon key={index} {...item} />
    });

    return <Stack>{items}</Stack>;
}