import { IconAt, IconBrandWhatsapp, IconMapPin, IconSun } from "@tabler/icons-react";
import { IContactItem } from "./types/misc";

export const routes = [
    { label: 'Blog', link: '/blog' },
    { label: 'Gallery', link: '/gallery' },
];

export const contactDetails: IContactItem[] = [
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