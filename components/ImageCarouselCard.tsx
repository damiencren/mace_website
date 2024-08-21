import { Button, Paper, Text, Title } from "@mantine/core";
import classes from '../styles/ImageCarousel.module.css';
import Link from "next/link";


interface CardProps {
    title : string;
    image: string;
    link: string;
  }

export default function ImageCarouselCard({ title, image, link }: CardProps) {
    return (
      <Paper
        shadow="md"
        p="xl"
        radius={0}
        style={{backgroundImage: `url(${image})` }}
        className={classes.card}
      >
        <Title className={classes.title}>
            {title}
        </Title>
        <Link href={link} style={{ textDecoration: 'none' }}>
          <Button className={`${classes.button} button`}size="lg" radius="md">
            En savoir plus
          </Button>
        </Link>
      </Paper>
    );
  }