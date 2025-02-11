export interface ExperienceProps {
  dateStart: string;
  dateEnd: string;
  jobTitle: string;
  descriptions: string[];
}

export default function Experience(props: ExperienceProps) {
  return (
    <div className="flex flex-col gap-1 2xl:grid 2xl:grid-cols-[minmax(auto,120px)_1fr] 2xl:gap-9">
      <div className="text-2xl 2xl:text-xl 2xl:grid grid-cols-subgrid">{`${props.dateStart} - ${props.dateEnd}`}</div>
      <div className="flex flex-col gap-4">
        <p className="underline">{props.jobTitle}</p>
        <div className="flex flex-col gap-6">
          {props.descriptions.map((desc) => (
            <p>{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
