import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import classes from "../styles/InfoCards.module.css";
import Link from "next/link";

interface CardProps {
    title: string;
    image: string;
    link: string;
}

export default function InfoCard({title, image, link} : CardProps ){
    return (
        <Card shadow="sm" radius="md" withBorder className={classes.card}>
            <Card.Section>
            <Image
            src={image}
            fit="contain"
            height={150}
            width={150}
            style={{ padding: '20px' }}
            alt={title}
            />
        </Card.Section>


            <Link href={link} style={{ textDecoration: 'none' }}>
                <Button className='button' color="blue" fullWidth mt="md" radius="md">
                    {title}
                </Button>
            </Link>
        </Card>
    );
}