import { ProjectProps } from '@/components/Project';

const projects: ProjectProps[] = [
  {
    projectTitle: 'Retro Design Portolio Website',
    thumbnailURL: '/images/thumbnails/Portfolio.png',
    thumbnailAlt: "Thumbnail of Scott Fulguirinas' Portfolio ",
    descriptions: [
      'This portfolio website features a retro-futuristic, monochrome, and pixelated aesthetic, drawing inspiration from classic computer interfaces.',
    ],
    techUsed: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    projectTitle: 'Salida',
    thumbnailURL: '/images/thumbnails/Salida.png',
    thumbnailAlt: 'Thumbnail of Salida',
    descriptions: [
      'A web app with all components built from scratch, using the TMDB API to provide film and television enthusiasts with an engaging platform for exploring detailed information about movies, TV shows, and cast and crew.',

      'Its mobile-first UI features swipe navigation, smooth transitions, and seamless back gesture support.',
    ],
    techUsed: ['Angular', 'Firebase', 'Express.js', 'TypeScript'],
  },
  {
    projectTitle: 'OMDb Titles Browser',
    thumbnailURL: '/images/thumbnails/OMDbTB.png',
    thumbnailAlt: 'Thumbnail of OMDb Titles Browser',
    descriptions: [
      "A web app to browse information about Movies, TV Series, and more in the OMDB API and TMDB API's Dataset.",
    ],
    techUsed: ['Typescript', 'Sass', 'Express.js'],
  },
];

export default projects;
