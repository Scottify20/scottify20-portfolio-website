import About from '@/components/About';
import Experience, { ExperienceProps } from '@/components/Experience';
import Frame from '@/components/frame/Frame';
import Project, { ProjectProps } from '@/components/Project';
import Section from '@/components/Section';
import Skill, { SkillProps } from '@/components/Skill';

const experiences: ExperienceProps[] = [
  {
    dateStart: 'Nov 2024',
    dateEnd: 'Feb 2025',
    companyName: 'Acme Corporation',
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

const skills: SkillProps[] = [
  {
    iconURL: '/images/icons/tech/html.svg',
    label: 'HTML',
    altText: 'HTML icon',
  },
  {
    iconURL: '/images/icons/tech/css.svg',
    label: 'CSS',
    altText: 'CSS icon',
  },
  {
    iconURL: '/images/icons/tech/javascript.svg',
    label: 'JavaScript',
    altText: 'JavaScript icon',
  },
  {
    iconURL: '/images/icons/tech/typescript.svg',
    label: 'TypeScript',
    altText: 'TypeScript icon',
  },
  {
    iconURL: '/images/icons/tech/c-sharp.svg',
    label: 'C#',
    altText: 'C# icon',
  },
  {
    iconURL: '/images/icons/tech/angular.svg',
    label: 'Angular',
    altText: 'Angular icon',
  },
  {
    iconURL: '/images/icons/tech/react.svg',
    label: 'React',
    altText: 'React icon',
  },
  {
    iconURL: '/images/icons/tech/firebase.svg',
    label: 'Firebase',
    altText: 'Firebase icon',
  },
  {
    iconURL: '/images/icons/tech/node.svg',
    label: 'Node.js',
    altText: 'Node.js icon',
  },
  {
    iconURL: '/images/icons/tech/photoshop.svg',
    label: 'Photoshop',
    altText: 'Adobe Photoshop icon',
  },
  {
    iconURL: '/images/icons/tech/illustrator.svg',
    label: 'Illustrator',
    altText: 'Adobe Illustrator icon',
  },
  {
    iconURL: '/images/icons/tech/figma.svg',
    label: 'Figma',
    altText: 'Figma icon',
  },
  {
    iconURL: '/images/icons/tech/posgresql.svg',
    label: 'PosgreSQL',
    altText: 'PosgreSQL icon',
  },
  {
    iconURL: '/images/icons/tech/sass.svg',
    label: 'Sass',
    altText: 'Sass icon',
  },
  {
    iconURL: '/images/icons/tech/tailwind.svg',
    label: 'Tailwind CSS',
    altText: 'Tailwind CSS icon',
  },
  {
    iconURL: '/images/icons/tech/express.svg',
    label: 'Express.js',
    altText: 'Express.js icon',
  },
  {
    iconURL: '/images/icons/tech/git.svg',
    label: 'Git',
    altText: 'Git icon',
  },
  {
    iconURL: '/images/icons/tech/github.svg',
    label: 'Github',
    altText: 'Github icon',
  },
];

export default function Home() {
  return (
    <Frame
      nav={<div></div>}
      content={
        <div className="justify-self-center rounded-3xl md:rounded-none scrollbar-thin-mobile overflow-y-auto overflow-x-hidden relative max-h-full flex flex-col gap-16 2xl:grid 2xl:grid-cols-[1fr_1.25fr] 2xl:gap-12">
          <div id="column-1" className="max-h-fit 2xl:sticky 2xl:top-0">
            <About></About>
          </div>

          <div id="column-2" className="flex flex-col gap-16 ">
            <Section
              title="Tech Stack"
              content={
                <div className="gap-8 grid grid-cols-[repeat(auto-fit,minmax(72px,1fr))] ">
                  {skills.map((skill, index) => (
                    <Skill key={index} {...skill}></Skill>
                  ))}
                </div>
              }
            ></Section>

            <Section
              title="Experience"
              content={
                <div className="flex flex-col gap-12 2xl:grid 2xl:grid-cols-1">
                  {experiences.map((experience, index) => (
                    <Experience key={index} {...experience} />
                  ))}
                </div>
              }
            ></Section>

            <Section
              title="Projects"
              content={
                <div className="flex flex-col gap-12 2xl:grid 2xl:grid-cols-1">
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
