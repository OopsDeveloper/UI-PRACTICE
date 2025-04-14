import data from "../data";
import type { StyleProps } from '../../../types/common';

const AccordionItem = ({ 
  id, 
  title, 
  description,
  initialChecked,
  styles
}: { 
  id: string; 
  title: string; 
  description: string; 
  initialChecked: boolean;
  styles: { [key: string]: string};
}) => {
  return (
    <li className={`${styles.item} ${styles.item5}`} key={id}>
      <input
        className={styles.input}
        type="radio"
        name="accordion"
        id={id}
        defaultChecked={initialChecked}
      />
      <label htmlFor={id} className={styles.tab}>
        {title}
      </label>
      <div className={styles.description}>{description}</div>
    </li>
  );
};

const Accordion4 = ({ styles }: StyleProps) => {
  return (
    <>
      <h3>#4. React <sub>html input(radio)로 처리</sub></h3>
      <ul className={styles.container}>
        {data.map((d, i) => (
          <AccordionItem {...d} key={d.id} initialChecked={i === 0} styles={styles}/>
        ))}
      </ul>
    </>
  );
};

export default Accordion4;
