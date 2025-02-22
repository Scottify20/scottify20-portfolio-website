import AnimatedBorder from './AnimatedBorder/AnimatedBorder';
import TechUsedList from './TechUsedChipList';

export interface ExperienceProps {
  dateStart: string;
  dateEnd: string;
  jobTitle: string;
  companyName: string;
  descriptions: string[];
  techUsed: string[];
}

export default function Experience(props: ExperienceProps) {
  const { dateStart, dateEnd, jobTitle, companyName, descriptions, techUsed } = props;

  return (
    <AnimatedBorder>
      <div className="@container/exp">
        <div className=" flex flex-col gap-3 @3xl/exp:grid @3xl/exp:grid-cols-[minmax(auto,180px)_1fr] @3xl/exp:gap-9">
          <div className="text-2xl @3xl/exp:text-xl @3xl/exp:grid grid-cols-subgrid">{`${dateStart} - ${dateEnd}`}</div>

          <div className="flex flex-col gap-6">
            <p className=" flex flex-wrap align-center gap-x-3">
              <span className="underline underline-offset-[0.4em] decoration-[3.5px] font-semibold text-orange-300 leading-[1.6]">
                {jobTitle}
              </span>
              <span className="pt-[0.25em]">{' • '}</span>
              <span className="underline underline-offset-[0.4em] decoration-[3.5px] font-semibold text-orange-300 leading-[1.6]">
                {companyName}
              </span>
            </p>

            <div className="flex flex-col gap-6">
              {descriptions.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>

            <TechUsedList techUsed={techUsed}></TechUsedList>
          </div>
        </div>
      </div>
    </AnimatedBorder>
  );
}
