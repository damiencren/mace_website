import { Image, Text } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

export default function Logo() {
    return (
        <Link href="/">
            <Image h={70}w="auto" src="/logo.PNG"/>
        </Link>
    );
}