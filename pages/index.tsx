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

export default function Home() {
  

  return (
    <RootLayout>
      <Container className={classes.main}>
        <ImageCarousel/>
        <InfoCardsGroup/>
        <LocalisationGroup/>
      </Container>
    </RootLayout>
  );
}