import { useState } from 'react';
import { Container, Anchor, Group, Burger, Box, AppShell, AppShellFooter, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../styles/Home.module.css';
import RootLayout from '../layouts/layout';
import RealisationCarousel from '../components/RealisationsCarousel';
import AboutText from '../components/AboutText';

export default function Maconnerie() {
  
    const links = [
        "./1.jpg",
        "./2.jpg"
    ]
        
    const title = "Mini pelle"

    const description = "Nous réalisons tous vos travaux de terrassement, de la création de tranchées à la préparation de terrain pour la construction de piscines. Nous vous garantissons un travail de qualité, réalisé dans les règles de l'art."

    return (
        <RootLayout>
            <Container className={classes.main}>
                <AboutText title={title} description={description}/>
                <RealisationCarousel links={links}/>
            </Container>
        </RootLayout>
    );
}