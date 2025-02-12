import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  content: ReactNode;
}

export default function Section(props: SectionProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="inverted text-body sticky top-0 ">{props.title}</div>
      <div>{props.content}</div>
    </div>
  );
}
