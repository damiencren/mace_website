import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text } from '@mantine/core';
import Card from './ImageCarouselCard';
import ImageCarouselCard from './ImageCarouselCard';
import MainCarouselCard from './MainCarouselCard';


const data= [
  {title: 'Carrelage', image: '/photos/car/1.png', link : '/carrelage'},
  {title: 'Placo', image: '/photos/placo/2.png', link : '/placo'},
  {title: 'Mini pelle', image: '/photos/mini/1.png', link : '/minipelle'},
  {title: 'Maconnerie', image: '/photos/maco/1.png', link : '/maconnerie'},
  {title: 'Travaux Spécifiques', image: '/photos/charp/1.png', link : '/travaux_specifiques'}
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
        <MainCarouselCard title='Votre projet notre savoir faire' image='/photos/placo/3.png'/>
      </Carousel.Slide>
      {slides}
    </Carousel>
  );
}