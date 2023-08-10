import { Stack } from '@mantine/core';
import { IconSun, IconMapPin, IconAt, IconBrandWhatsapp } from '@tabler/icons-react';
import ContactIcon from './ContactIcon';
import { IContactIconsListProps } from '@/types/props';
import { IContactItem } from '@/types/misc';

const MOCKDATA: IContactItem[] = [
    { 
        title: 'Email', 
        description: 'anamikajyotish25@gmail.com', 
        icon: IconAt,
        link: 'mailto:anamikajyotish25@gmail.com'
    }, { 
        title: 'Phone / Whatsapp', 
        description: '+91 95608 40401', 
        icon: IconBrandWhatsapp,
        link: 'https://wa.me/919560840401',
        target: '_blank',
        copy: true
    }, { 
        title: 'Working hours', 
        description: '8 a.m. – 11 p.m.', 
        icon: IconSun 
    }, { 
        title: 'Location', 
        description: 'New Delhi, India', 
        icon: IconMapPin
    }
];

export function ContactIconsList({ data = MOCKDATA }: IContactIconsListProps) {
    const items = data.map((item, idx) => {
        return <ContactIcon key={idx} contactItem={item} />
    });

    return <Stack>{items}</Stack>;
}