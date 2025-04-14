import { useState } from "react";
import data from "../data"
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
      className={`${styles.item} ${current ? styles.current : ''}`}
       key={id}
    >
      <div className={styles.tab} onClick={toggle}>{title}</div>
      {current && <div className={styles.description}>{description}</div>}
    </li>
  )
}

const Accordion1 = ({ styles }: StyleProps) => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    // prev === id : 이미 열린 걸 다시 클릭한 거니까 -> 닫아야 됨 -> null로 바꿈
    // prev !== id : 다른 걸 클릭했으니까 -> 그걸 새로 열어야 됨 -> id로 바꿈
    setCurrentId(prev => prev === id ? null : id);
  }

  return (
    <>
      <h3>#1. React <sub>현재 desc만 html로 그리기</sub></h3>
      <ul className={styles.container}>
        {data.map(d => (
          <AccordionItem {...d} key={d.id} current={currentId === d.id} toggle={toggleItem(d.id)} styles={styles} />
        ))}
      </ul>
    </>
  )
}

export default Accordion1