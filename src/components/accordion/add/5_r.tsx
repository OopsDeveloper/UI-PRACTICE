import data from '../data'
import { useEffect, useRef } from 'react'
import type { StyleProps } from '../../../types/common';

const AccordionItem = ({
  title,
  description,
  open,
  styles,
}: {
  title: string;
  description: string;
  open: boolean;
  styles: { [key: string]: string};
}) => {
  const descRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const open = () => {
      if (descRef.current) {
        descRef.current.open = true;
      }
    }

    if (descRef.current) {
      descRef.current?.addEventListener('beforematch', open);
    }

    return () => {
      if (descRef.current) {
        descRef.current?.removeEventListener('beforematch', open);
      }
    }

  }, [open])

  return (
    <details name="details" ref={descRef} open={open}>
      <summary>{title}</summary>
      <div className={styles.description}>{description}</div>
    </details>
  )
}

const Accordion5 = ({ styles }: StyleProps) => {
  return (
    <>
      <h3>
        #5. React
        <sub> 여러 개가 펼쳐지는 아코디언 + 검색가능 (details태그) + Ctrl F 찾기</sub>
      </h3>
      <ul className={styles.container}>
        {data.map((d, i) => (
          <AccordionItem {...d} key={d.id} open={i === 0} styles={styles}/>
        ))}
      </ul>
    </>
  )
}

export default Accordion5
