import { Anchor, AppShell, Button, Container, Group, Image, Text } from '@mantine/core';
import classes from '../styles/Footer.module.css';
import Logo from '../components/Logo';


export default function Footer() {

  return (
      <Container className={classes.footer}>
        <Text className={classes.footerText}>ouestrenovation22@gmail.com</Text>
        <Text className={classes.footerText}>06 50 98 89 73</Text>
      </Container>
  );
}