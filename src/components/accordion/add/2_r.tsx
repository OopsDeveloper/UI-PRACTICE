import { useState } from "react";
import data from "../data";
import type { StyleProps } from '../../../types/common';

const AccordionItem = ({ 
  id, 
  title, 
  description, 
  current, 
  toggle,
  styles,
}: { 
  id: string; 
  title: string; 
  description: string; 
  current: boolean; 
  toggle: () => void;
  styles: { [key: string]: string};
}) => {
  return (
    <li
      className={`${styles.item} ${styles.item3} ${current ? styles.current : ''}`}
      key={id}
    >
      <div className={styles.tab} onClick={toggle}>{title}</div>
      <div className={styles.description}>{description}</div>
    </li>
  );
};

const Accordion2 = ({ styles }: StyleProps) => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    setCurrentId(prev => prev === id ? null : id);
  };

  return (
    <>
      <h3>#2. React <sub>css animation (transition)</sub></h3>
      <ul className={styles.container}>
        {data.map(d => (
          <AccordionItem
            {...d}
            key={d.id}
            current={currentId === d.id}
            toggle={toggleItem(d.id)}
            styles={styles}
          />
        ))}
      </ul>
    </>
  );
};

export default Accordion2;
