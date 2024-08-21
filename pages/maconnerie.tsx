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
        
    const title = "Maconnerie"

    const description = "Nous réalisons tous vos travaux de maçonnerie, de la construction de murs à la pose de dalles, en passant par la rénovation de façades. Nous vous garantissons un travail de qualité, réalisé dans les règles de l'art."

    return (
        <RootLayout>
            <Container className={classes.main}>
                <AboutText title={title} description={description}/>
                <RealisationCarousel links={links}/>
            </Container>
        </RootLayout>
    );
}