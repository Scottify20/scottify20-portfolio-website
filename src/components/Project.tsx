export interface ProjectProps {
  thumbnailAlt: string;
  thumbnailURL: string;
  projectTitle: string;
  descriptions: string[];
}

export default function Project(props: ProjectProps) {
  return (
    <div className="flex flex-col gap-1 xl:grid xl:grid-cols-[minmax(auto,180px)_1fr] xl:gap-8">
      <div className="py-2">
        <img
          src={props.thumbnailURL}
          alt={props.thumbnailAlt}
          className="2xl:grid grid-cols-subgrid aspect-[3/2]"
        ></img>
      </div>
      <div className="flex flex-col gap-4">
        <p className="underline">{props.projectTitle}</p>
        <div className="flex flex-col gap-6">
          {props.descriptions.map((desc) => (
            <p>{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
