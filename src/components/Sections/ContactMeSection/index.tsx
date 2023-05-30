import {
    Paper,
    Text,
    TextInput,
    Textarea,
    Button,
    Group,
    SimpleGrid,
    createStyles,
    rem,
    Container,
    Title,
} from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useStyles } from './styles';
import React from 'react';
import { IContactForm } from '@/types/misc';
import useForm from '@/hooks/useForm';
import { sendFormDataToTelegram } from '@/api/telegram';
import { notifications } from '@mantine/notifications';



export default function GetInTouch() {
    const { classes } = useStyles();
    const form = useForm<IContactForm>({
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
        },
    });

    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
                console.error(error);
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

    return (
        <Container size="lg" mt={40}>
            <Paper shadow="md" radius="lg" p='xl'>
                <Title order={1} align="center" mb={20}>Get in touch with me.</Title>
                <div className={classes.wrapper}>
                    <div className={classes.contacts}>
                        <Text fz="lg" fw={700} className={classes.title} c="#fff">
                            Contact information
                        </Text>

                        {/* <ContactIconsList variant="white" /> */}
                    </div>

                    <form className={classes.form} onSubmit={handleSubmit}>
                        <div className={classes.fields}>
                            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                                <TextInput 
                                    label="Your Name" 
                                    placeholder="Your name" 
                                    name='name' 
                                    // {...form.getInputProps('name')}
                                    {...form.getInputProps('name')}                                    
                                />
                                <DateTimePicker 
                                    label="Your Birth Day and Time" 
                                    placeholder="Your Birth Day and Time" 
                                    name="dateTime"
                                    clearable
                                    // {...form.getInputProps('dateTime')}
                                    {...form.getInputProps('dateTime')}
                                />
                            </SimpleGrid>

                            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                                <TextInput 
                                    label="Your Phone Number" 
                                    placeholder="Your Phone Number" 
                                    name='phone'
                                    // {...form.getInputProps('phone')}
                                    {...form.getInputProps('phone')}
                                />
                                <TextInput 
                                    label="Your Email" 
                                    placeholder="hello@xyz.com" 
                                    name='email'
                                    // {...form.getInputProps('email')}
                                    {...form.getInputProps('email')}
                                />
                            </SimpleGrid>

                            <Textarea
                                mt="md"
                                label="Your Message"
                                placeholder="Ask your question here"
                                minRows={3}
                                name='message'
                                // {...form.getInputProps('message')}
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
            </Paper>
        </Container>
    );
}