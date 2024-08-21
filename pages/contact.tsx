import { useState } from 'react';
import Link from 'next/link';
import type { NextApiRequest, NextApiResponse } from 'next'; // Ajouté
import RootLayout from '../layouts/layout';
import classes from '../styles/Home.module.css';
import { Container, TextInput, Button, Checkbox, Group, Textarea, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Contact() {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            message: '',
            termsOfService: false,
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    async function handleSubmit(values: any) {
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error(`response status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log(responseData['message']);
            alert('Message successfully sent');
        } catch (err) {
            console.error(err);
            alert("Error, please try resubmitting the form");
        }
    };

    return (
        <RootLayout>
            <Container>
                    <form onSubmit={form.onSubmit(handleSubmit)} className={classes.form}>
                        <Stack style={{width:"100%"}}>
                            <TextInput withAsterisk label="Nom" placeholder="Nom" {...form.getInputProps('name')} className="text-black" />
                            <TextInput withAsterisk label="Adresse Mail" placeholder="Adresse Mail" {...form.getInputProps('email')} className="text-black" />
                            <Textarea withAsterisk label="Message" placeholder="Votre demande" {...form.getInputProps('message')} autosize minRows={8} maxRows={8} className="text-black" />
                        </Stack>
                        <Group justify="flex-end" mt="md">
                            <Button type="submit" className="rounded bg-sky-400">Envoyer</Button>
                        </Group>
                    </form>
            </Container>
        </RootLayout>
    );
}