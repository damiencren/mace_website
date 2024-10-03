import { useState } from 'react';
import { Container, Anchor, Group, Burger, Box, AppShell, AppShellFooter, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../styles/Home.module.css';
import RootLayout from '../layouts/layout';
import RealisationCarousel from '../components/RealisationsCarousel';
import AboutText from '../components/AboutText';

export default function Maconnerie() {
  
    const links = [
        '/photos/decap/1.png',
        '/photos/charp/1.png'
    ]
        
    const title1 = "Décapage de toiture"
    const title2 = "Traitements charpente"

    const description1 = "Nous proposons un service de décapage de toiture, essentiel pour restaurer l'apparence et l'intégrité de votre couverture. Nous commençons par une évaluation détaillée de l'état de la toiture, puis utilisons des méthodes efficaces pour éliminer les anciennes couches de peinture, les résidus de mousse et autres débris, tout en respectant les matériaux d'origine. Notre équipe expérimentée veille à réaliser cette opération avec soin, en respectant les normes de sécurité et en minimisant les nuisances."
    const description2 = "Nous proposons un service complet de traitement préventif et curatif de charpente, essentiel pour assurer la solidité et la durabilité de vos structures en bois. Notre intervention débute par une inspection minutieuse pour détecter d'éventuelles infestations ou dégradations. Pour le traitement préventif, nous utilisons des produits spécifiques qui protègent votre charpente contre les insectes xylophages, l'humidité et les champignons. Si des dommages ont déjà été constatés, notre approche curative inclut l'application de traitements adaptés pour éradiquer les problèmes existants et renforcer la structure. Notre équipe qualifiée s'assure d'une application rigoureuse, respectant les normes de sécurité et les recommandations des fabricants. Choisissez notre service pour garantir la santé et la pérennité de votre charpente."
    return (
        <RootLayout>
            <Container className={classes.main}>
                <AboutText title={title1} description={description1} image='/photos/decap/1.png'/>
                <AboutText title={title2} description={description2} image='/photos/charp/1.png'/>
                <RealisationCarousel links={links}/>
            </Container>
        </RootLayout>
    );
}