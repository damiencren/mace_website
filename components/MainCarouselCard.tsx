import { Button, Image, Paper, Text, Title } from "@mantine/core";
import classes from '../styles/ImageCarousel.module.css';
import Link from "next/link";
import Logo from "./Logo";


interface CardProps {
    title : string;
    image: string;
  }

export default function MainCarouselCard({ title, image }: CardProps) {
    return (
      <Paper
        shadow="md"
        p="xl"
        radius={0}
        style={{backgroundImage: `url(${image})` }}
        className={classes.card}
      >
        <Image src='/logo.PNG' alt="logo" className={classes.logo}/>
        <Title className={classes.title}>
            {title}
        </Title>
      </Paper>
    );
  }