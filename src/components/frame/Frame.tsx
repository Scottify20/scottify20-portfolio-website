import { div } from 'motion/react-client';
import styles from './Frame.module.css';
import { ReactNode } from 'react';

interface FrameProps {
  nav: ReactNode;
  content: ReactNode;
  [key: string]: any;
}

export default function Frame(props: FrameProps) {
  const combinedClasses = (baseClass: string, ...otherClasses: string[]) => {
    return [styles[baseClass], ...otherClasses].filter(Boolean).join(' ');
  };

  return (
    <div id="frame" className={combinedClasses('frame')}>
      <div id="nav-and-logo-container">{props.nav}</div>

      <div
        id="inner-content-container"
        className={combinedClasses('inner', 'drop-shadow', 'p-4 md:p-8 lg:p-8')}
      >
        {props.content}
      </div>
      <div className={combinedClasses('inner-cover', 'cover')}></div>

      <div className={combinedClasses('outer', 'drop-shadow')}></div>
      <div className={combinedClasses('outer-cover-1', 'cover')}></div>
      <div className={combinedClasses('outer-cover-2', 'cover')}></div>
    </div>
  );
}
