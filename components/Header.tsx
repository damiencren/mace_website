import { Anchor, AppShell, Button, Container, Group } from '@mantine/core';
import classes from '../styles/Header.module.css';
import Logo from '../components/Logo';
import { useState } from 'react';
import Link from 'next/link';

const mainLinks = [
    { link: '/', label: 'Acceuil' },
    { link: '/carrelage', label: 'Carrelage' },
    { link: '/placo', label: 'Placo' },
    { link: '/maconnerie', label: 'Maconnerie' },
    { link: '/minipelle', label: 'Mini pelle' },
    { link: '/travaux_specifiques', label: 'Travaux spécifiques' }
  ];

export default function Header() {


    const mainItems = mainLinks.map((item, index) => (
        <Link
          href={item.link}
          key={item.label}
          passHref
          className={classes.mainLink}
          >
          {item.label}
        </Link>
    ));

  return (
      <Container className={classes.inner}>
        <Logo />
        <Group className={classes.mainLinks}>
          {mainItems}
          <Link href='/contact' passHref>
            <Button className='button' radius="md" size="md">
              Contactez-nous
            </Button>
          </Link>
        </Group>
      </Container>
  );
}