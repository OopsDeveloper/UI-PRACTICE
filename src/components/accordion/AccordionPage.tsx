import styles from './AccordionPage.module.css';
import Accordion1 from './add/1_r';
import Accordion2 from './add/2_r';
import Accordion3v from './add/3_v';
import Accordion4 from './add/4_r';
import Accordion5 from './add/5_r';

const AccordionPage = () => {
  return (
    <>
      <Accordion1 styles={styles}/>
      <Accordion2 styles={styles}/>
      <Accordion3v styles={styles}/>
      <Accordion4 styles={styles}/>
      <Accordion5 styles={styles}/>
    </>
  )
}


export default AccordionPage;