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

    const description = "Nous vous proposons des services spécialisés dans les ouvertures de murs, une technique essentielle pour améliorer la circulation et la luminosité dans vos espaces. Nos interventions incluent le découpage précis de la maçonnerie, l'évaluation des structures porteuses et le renforcement si nécessaire. Nous garantissons le respect des normes de sécurité en vigueur et assurons un suivi rigoureux de chaque étape, de la préparation à la finition. Que ce soit pour l'installation de fenêtres, de portes ou la création d'agrandissements, notre équipe expérimentée met en œuvre des méthodes techniques adaptées pour assurer la qualité et la durabilité de vos ouvertures."
    
    return (
        <RootLayout>
            <Container className={classes.main}>
                <AboutText title={title} description={description}/>
                <RealisationCarousel links={links}/>
            </Container>
        </RootLayout>
    );
}