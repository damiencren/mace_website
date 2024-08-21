import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text } from '@mantine/core';
import Card from './ImageCarouselCard';
import ImageCarouselCard from './ImageCarouselCard';
import MainCarouselCard from './MainCarouselCard';


const data= [
  {title: 'Carrelage', image: '/1.jpg', link : '/carrelage'},
  {title: 'Placo', image: '/2.jpg', link : '/placo'},
  {title: 'Mini pelle', image: '/3.jpg', link : '/minipelle'},
  {title: 'Maconnerie', image: '/3.jpg', link : '/maconnerie'}
]

export default function ImageCarousel() {

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <ImageCarouselCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel withIndicators
    height={600}
    slideSize={{ base: '100%'}}
    style={{ width: '100%' }}
    >
      <Carousel.Slide>
        <MainCarouselCard title='Votre projet notre savoir faire' image='/1.jpg'/>
      </Carousel.Slide>
      {slides}
    </Carousel>
  );
}