import { Image, Text } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import classes from '../styles/Logo.module.css';

export default function Logo() {
    return (
        <Link href="/">
            <Image className={classes.logo} src="/logo.PNG"/>
        </Link>
    );
}