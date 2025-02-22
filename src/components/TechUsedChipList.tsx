export interface TechUsedListProps {
  techUsed: string[];
}

export default function TechUsedList(props: TechUsedListProps) {
  return (
    <div className="text-xl flex flex-row flex-flow flex-wrap gap-4 opacity-80">
      {props.techUsed.map((tech, index) => (
        <span className="flex flex-row flex-flow" key={index}>
          <span className="text-lg  bordered">{tech}</span>
          {/* {index < props.techUsed.length - 1 ? <span className="px-3">{' • '}</span> : null} */}
        </span>
      ))}
    </div>
  );
}
