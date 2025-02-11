import About from '@/components/About';
import Experience, { ExperienceProps } from '@/components/Experience';
import Frame from '@/components/frame/Frame';
import Project, { ProjectProps } from '@/components/Project';
import Section from '@/components/Section';

const experiences: ExperienceProps[] = [
  {
    dateStart: 'Nov 2024',
    dateEnd: 'Feb 2025',
    jobTitle: 'UI/UX Design Intern',
    descriptions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
  },
];

const projects: ProjectProps[] = [
  {
    thumbnailAlt: 'Thumbnail of Salida',
    thumbnailURL: '/images/thumbnails/Salida.png',
    projectTitle: 'Salida',
    descriptions: [
      'Salida is a web application that taps into the vast library of the TMDB API, providing an engaging experience for film and television enthusiasts.',
    ],
  },
  {
    thumbnailAlt: 'Thumbnail of OMDb Titles Browser',
    thumbnailURL: '/images/thumbnails/OMDbTB.png',
    projectTitle: 'OMDb Titles Browser',
    descriptions: [
      "A web app to browse information about Movies, TV Series, and more in the OMDB API and TMDB API's Dataset.",
    ],
  },
];

export default function Home() {
  return (
    <Frame
      nav={<div></div>}
      content={
        <div className="justify-self-center rounded-2xl scrollbar-thin-mobile overflow-auto  relative max-h-full flex flex-col gap-16 2xl:grid 2xl:grid-cols-2 2xl:gap-12">
          <div id="column-1" className="max-h-fit 2xl:sticky 2xl:top-0">
            <About></About>
          </div>

          <div id="column-2" className="flex flex-col gap-16 ">
            <Section
              title="Experience"
              content={
                <div className="flex flex-col gap-9 2xl:grid 2xl:grid-cols-1">
                  {experiences.map((experience, index) => (
                    <Experience key={index} {...experience} />
                  ))}
                </div>
              }
            ></Section>

            <Section
              title="Projects"
              content={
                <div className="flex flex-col gap-9 2xl:grid 2xl:grid-cols-1">
                  {projects.map((proj, index) => (
                    <Project key={index} {...proj}></Project>
                  ))}
                </div>
              }
            ></Section>
          </div>
        </div>
      }
    />
  );
}
