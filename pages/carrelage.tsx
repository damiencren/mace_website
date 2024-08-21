import { useState } from 'react';
import { Container, Anchor, Group, Burger, Box, AppShell, AppShellFooter, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../styles/Home.module.css';
import Logo from '../components/Logo';
import Header from '../components/Header';
import ImageCarousel from '../components/ImageCarousel';
import InfoCardsGroup from '../components/InfoCardsGroup';
import LocalisationView from '../components/LocalisationView';
import Footer from '../components/Footer';
import LocalisationGroup from '../components/LocalisationGroup';
import RootLayout from '../layouts/layout';
import RealisationCarousel from '../components/RealisationsCarousel';
import AboutText from '../components/AboutText';

export default function Maconnerie() {
  
    const links = [
        "./1.jpg",
        "./2.jpg"
    ]
        
    const title = "Carrelage"

    const description = "Nous réalisons tous vos travaux de carrelage, de la pose de carrelage au sol à la pose de faïence dans votre salle de bain. Nous vous garantissons un travail de qualité, réalisé dans les règles de l'art."

    return (
        <RootLayout>
            <Container className={classes.main}>
                <AboutText title={title} description={description}/>
                <RealisationCarousel links={links}/>
            </Container>
        </RootLayout>
    );
}