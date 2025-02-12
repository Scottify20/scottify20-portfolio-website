export interface ExperienceProps {
  dateStart: string;
  dateEnd: string;
  jobTitle: string;
  companyName: string;
  descriptions: string[];
}

export default function Experience(props: ExperienceProps) {
  return (
    <div className="@container/exp">
      <div className=" flex flex-col gap-1 @3xl/exp:grid @3xl/exp:grid-cols-[minmax(auto,180px)_1fr] @3xl/exp:gap-9">
        <div className="text-2xl @3xl/exp:text-xl @3xl/exp:grid grid-cols-subgrid">{`${props.dateStart} - ${props.dateEnd}`}</div>
        <div className="flex flex-col gap-4">
          <p className="flex flex-row align-center gap-4">
            <span className="underline underline-offset-[0.33em] whitespace-nowrap">
              {props.jobTitle}
            </span>
            <span className="text-4xl pt-[2px]">{' | '}</span>
            <span className="underline underline-offset-[0.33em] whitespace-nowrap">
              {props.companyName}
            </span>
          </p>
          <div className="flex flex-col gap-6">
            {props.descriptions.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
