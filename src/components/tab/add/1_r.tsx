import { useState } from "react";
import data from "../data"
import type { StyleProps } from '../../../types/common';

const TabItem = ({ 
  id, 
  title, 
  current, 
  toggle,
  styles,
}: { 
  id: string; 
  title: string; 
  current: boolean; 
  toggle: () => void;
  styles: { [key: string]: string};
}) => {
  return (
    <li 
      className={`${styles.tab} ${current ? styles.current : ''}`}
      key={id}
      onClick={toggle}
    >
      {title}
    </li>
  )
}

const TabMenu1 = ({ styles }: StyleProps) => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    setCurrentId(id);
  }


  const currentDescription = data.find((item) => item.id === currentId)?.description || '';

  return (
    <>
      <h3>#1. React <sub>현재 desc만 html로 그리기</sub></h3>
      <div className={styles.container}>
        <ul className={styles.tabList}>
          {data.map(d => (
            <TabItem {...d} key={d.id} current={currentId === d.id} toggle={toggleItem(d.id)} styles={styles} />
          ))}
        </ul>
        <div className={styles.description}>{currentDescription}</div>
      </div>
    </>
  )
}

export default TabMenu1;