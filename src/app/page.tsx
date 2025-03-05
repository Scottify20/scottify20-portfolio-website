import About from '@/components/About';
import AnimatedBorder from '@/components/AnimatedBorder/AnimatedBorder';
import ContactIcons from '@/components/ContactIcons';
// import Experience from '@/components/Experience';
import Frame from '@/components/Frame/Frame';
import Project from '@/components/Project';
import Section from '@/components/Section';
import Skill from '@/components/Skill';

// import experiences from '@/data/experiences';
import projects from '@/data/projects';
import skills from '@/data/skills';

export default function Home() {
  return (
    <Frame
      nav={
        <div className="xl:hidden flex flex-row flex-nowrap gap-6 items-center justify-between md:flex-col h-full">
          <div className="bg-tva-orange w-12 aspect-square"></div>
          <div className="w-[170px] md:h-[180px]">
            <ContactIcons className="flex-row md:flex-col md: h-full"></ContactIcons>
          </div>
        </div>
      }
      content={
        <div className=" justify-self-center rounded-3xl md:rounded-none scrollbar-thin-mobile overflow-y-auto overflow-x-hidden relative max-h-full flex flex-col gap-16 xl:grid xl:grid-cols-[1fr_1.25fr]">
          <div
            id="column-1 "
            className=" relative max-h-fit xl:sticky xl:top-0 flex flex-col gap-20"
          >
            <About></About>
          </div>

          <div id="column-2" className=" relative flex flex-col gap-20 supports-hover:pr-4">
            <Section
              title="Tech Stack"
              content={
                <AnimatedBorder animateClick={false}>
                  <div className="gap-8 grid grid-cols-[repeat(auto-fit,minmax(56px,1fr))] py-2">
                    {skills.map((skill, index) => (
                      <Skill key={index} {...skill}></Skill>
                    ))}
                  </div>
                </AnimatedBorder>
              }
            ></Section>

            {/* <Section
              title="Experience"
              content={
                <div className="flex flex-col gap-14 2xl:grid 2xl:grid-cols-1">
                  {experiences.map((experience, index) => (
                    <Experience key={index} {...experience} />
                  ))}
                </div>
              }
            ></Section> */}

            <Section
              title="Projects"
              content={
                <div className="flex flex-col gap-14 2xl:grid 2xl:grid-cols-1">
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
