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
        '/photos/placo/1.png',
        '/photos/placo/2.png',
        '/photos/placo/3.png'
    ]
        
    const title = "Placo"

    const description = "Notre activité de pose de placo se spécialise dans l'installation de plaques de plâtre pour optimiser l'isolation et l'aménagement intérieur de vos espaces. Nous commençons par une analyse des surfaces à traiter, en évaluant les besoins spécifiques en matière d'isolation thermique et acoustique. Notre équipe s'assure d'une mise en œuvre précise, incluant le montage de structures métalliques, la découpe des plaques et leur fixation sécurisée. Nous garantissons une finition soignée, avec des joints parfaitement réalisés pour un rendu esthétique. Faites confiance à notre expertise pour des travaux de pose de placo qui allient performance et durabilité."
    return (
        <RootLayout>
            <Container className={classes.main}>
                <AboutText title={title} description={description} image='/photos/placo/1.png'/>
                <RealisationCarousel links={links}/>
            </Container>
        </RootLayout>
    );
}