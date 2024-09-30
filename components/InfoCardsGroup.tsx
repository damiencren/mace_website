import { Container, Group } from "@mantine/core";
import InfoCard from "./InfoCard";
import classes from "../styles/InfoCards.module.css";

const data = [
    {
        title: "Carrelage",
        description: "Description",
        image: "/icons/carrelage.svg",
        link: "/carrelage",
    },
    {
        title: "Placo",
        description: "Description",
        image: "/icons/placo.svg",
        link: "/placo",
    },
    {
        title: "Mini pelle",
        description: "Description",
        image: "/icons/mini.png",
        link: "/minipelle",
    },
    {
        title: "Maconnerie",
        description: "Description",
        image: "/icons/maco.svg",
        link: "/maconnerie",
    },
    {
        title: "Travaux spécifiques",
        description: "Description",
        image: "/icons/specifiques.png",
        link: "/travaux_specifiques",
    }
];

export default function InfoCardsGroup() {

    const cards = data.map((item) => (
        <InfoCard key={item.title} {...item} />
    ));

    return (
        <Group className={classes.group}>
            {cards}
        </Group>
    );
}