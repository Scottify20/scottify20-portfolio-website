export interface ProjectProps {
  thumbnailAlt: string;
  thumbnailURL: string;
  projectTitle: string;
  descriptions: string[];
}

export default function Project(props: ProjectProps) {
  return (
    <div className="@container/proj">
      <div className="flex flex-col-reverse gap-4 @3xl/proj:grid @3xl/proj:grid-cols-[minmax(auto,180px)_1fr] @3xl/proj:gap-8">
        <div className="py-2">
          <img
            src={props.thumbnailURL}
            alt={props.thumbnailAlt}
            className=" @3xl/proj:grid grid-cols-subgrid aspect-[3/2]"
          ></img>
        </div>
        <div className="flex flex-col gap-4">
          <p className="underline underline-offset-[0.33em]">{props.projectTitle}</p>
          <div className="flex flex-col gap-6">
            {props.descriptions.map((desc) => (
              <p>{desc}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
