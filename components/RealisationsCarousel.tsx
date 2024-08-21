import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text, Image, Container } from '@mantine/core';
import Card from './ImageCarouselCard';
import ImageCarouselCard from './ImageCarouselCard';
import classes from '../styles/Realisation.module.css';


export default function RealisationCarousel({links}: {links: string[]}) {

  const slides = links.map((link) => (
    <Carousel.Slide key={link}>
      <Image src={link}/>
    </Carousel.Slide>
  ));

  return (
    <Container className={classes.container}>
        <Title className={classes.title}>Nos réalisations</Title>
        <Carousel withIndicators
        height={300}
        slideSize={{ base: '50%'}}
        style={{ width: '100%' }}
        >
        {slides}
        </Carousel>
    </Container>
  );
}