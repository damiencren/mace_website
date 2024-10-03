import { useState } from 'react';
import { Container, Anchor, Group, Burger, Box, AppShell, AppShellFooter, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../styles/Home.module.css';
import RootLayout from '../layouts/layout';
import RealisationCarousel from '../components/RealisationsCarousel';
import AboutText from '../components/AboutText';

export default function Maconnerie() {
  
    const links = [
        '/photos/mini/1.png',
        '/photos/mini/2.png',
        '/photos/mini/3.png',
        '/photos/mini/4.jpg'
    ]
        
    const title = "Mini pelle"

    const description = "Nous proposons un service de location de mini-pelle avec chauffeur, idéal pour divers travaux de terrassement et d'aménagement. Nos machines sont équipées de godets adaptés pour effectuer des tâches variées, telles que la préparation de terrains ou la pose de petits réseaux. Pour des travaux plus techniques, nous mettons également à disposition des pinces de tri, permettant de manipuler et de trier des matériaux en toute efficacité. Notre chauffeur expérimenté s'assure d'une utilisation optimale de la machine, respectant les normes de sécurité et les délais convenus. Choisissez notre service pour des interventions précises et professionnelles, adaptées à vos besoins spécifiques."
    return (
        <RootLayout>
            <Container className={classes.main}>
                <AboutText title={title} description={description} image='/photos/mini/1.png'/>
                <RealisationCarousel links={links}/>
            </Container>
        </RootLayout>
    );
}