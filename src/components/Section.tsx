import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  content: ReactNode;
}

export default function Section(props: SectionProps) {
  const { title, content } = props;

  return (
    <div className="flex flex-col gap-6">
      <div className="inverted text-2xl sticky top-0">{title}</div>
      <div>{content}</div>
    </div>
  );
}
