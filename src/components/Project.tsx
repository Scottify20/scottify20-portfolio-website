import AnimatedBorder from './AnimatedBorder/AnimatedBorder';
import TechUsedList from './TechUsedChipList';
import Image from 'next/image';

export interface ProjectProps {
  projectTitle: string;
  thumbnailURL: string;
  thumbnailAlt: string;
  descriptions: string[];
  techUsed: string[];
}

export default function Project(props: ProjectProps) {
  const { thumbnailAlt, thumbnailURL, projectTitle, descriptions, techUsed } = props;

  return (
    <AnimatedBorder>
      <div className="@container/proj">
        <div className="flex flex-col-reverse gap-4 @3xl/proj:grid @3xl/proj:grid-cols-[minmax(auto,180px)_1fr] @3xl/proj:gap-8">
          <div className="relative w-full aspect-[3/2] overflow-hidden rounded-sm mt-3 max-w-[360px]">
            <Image
              src={thumbnailURL}
              alt={thumbnailAlt}
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-6">
            <p className="underline underline-offset-[0.4em] decoration-[3.5px] font-semibold text-orange-300 leading-[1.6]">
              {projectTitle}
            </p>
            <div className="flex flex-col gap-6 ">
              {descriptions.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>

            <TechUsedList techUsed={techUsed} />
          </div>
        </div>
      </div>
    </AnimatedBorder>
  );
}
