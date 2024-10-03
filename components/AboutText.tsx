import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text, Image, Container } from '@mantine/core';
import Card from './ImageCarouselCard';
import ImageCarouselCard from './ImageCarouselCard';
import classes from '../styles/AboutText.module.css';


export default function AboutText({title, description, image}: {title: string, description: string, image :string}) {

  return (
    <Container className={classes.container}>
        <Title className={classes.title}>{title}</Title>
        <Container className={classes.splitContainer}>
            <Image src={image} className={classes.image}/>
            <Text className={classes.text}>{description}</Text>
        </Container>
    </Container>
  );
}


