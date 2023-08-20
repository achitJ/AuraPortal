import {
    Text,
    TextInput,
    Textarea,
    Button,
    Group,
    SimpleGrid,
    Container,
    Title,
} from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useStyles } from './styles';
import React from 'react';
import { IContactForm } from '@/types/misc';
import useForm from '@/hooks/useForm';
import { formMetadata, getHandler } from './utils'
import { ContactIconsList } from './IconList';
import { contactDetails } from '@/config';



export default function GetInTouch() {
    const { classes } = useStyles();
    const form = useForm<IContactForm>(formMetadata);
    const handleSubmit = getHandler(form);

    return (
        <Container size="md" mt={40}>
            <Title order={1} align="center" mb={20}>Get in touch with me</Title>
            <div className={classes.wrapper}>
                <div className={classes.contacts}>
                    <Text fz="xl" fw={750} className={classes.title} c="#fff">
                        Contact information
                    </Text>

                    <ContactIconsList data={contactDetails}/>
                </div>

                <form className={classes.form} onSubmit={handleSubmit}>
                    <div className={classes.fields}>
                        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                            <TextInput 
                                label="Your Name" 
                                placeholder="Your name" 
                                name='name' 
                                {...form.getInputProps('name')}                                    
                            />
                            <DateTimePicker 
                                label="Your Birth Day and Time" 
                                placeholder="Your Birth Day and Time" 
                                name="dateTime"
                                clearable
                                {...form.getInputProps('dateTime')}
                            />
                        </SimpleGrid>

                        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                            <TextInput 
                                label="Your Phone Number" 
                                placeholder="Your Phone Number" 
                                name='phone'
                                {...form.getInputProps('phone')}
                            />
                            <TextInput 
                                label="Your Email" 
                                placeholder="hello@xyz.com" 
                                name='email'
                                {...form.getInputProps('email')}
                            />
                        </SimpleGrid>

                        <Textarea
                            mt="md"
                            label="Your Message"
                            placeholder="Ask your question here"
                            minRows={3}
                            name='message'
                            {...form.getInputProps('message')}
                        />

                        <Group position="right" mt="md">
                            <Button type="submit" color='grape' className={classes.control}>
                                Send message
                            </Button>
                        </Group>
                    </div>
                </form>
            </div>
        </Container>
    );
}