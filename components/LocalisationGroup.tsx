import { AspectRatio, Container, Text, Title } from "@mantine/core";
import LocalisationView from "./LocalisationView";

import classes from "../styles/Localisation.module.css";


export default function LocalisationGroup() {


  return (
    <Container className={classes.group}>
        <Title order={1} className={classes.title}>Où sommes nous situés ?</Title>
        <Text>Nous sommes situés à Saint-Brieuc.</Text>
        <LocalisationView/>
    </Container>
  );
}