import styles from './Gnb.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

const tabList = [
  { key: 'accordion', name: '01. 아코디언' },
  { key: 'tab', name: '02. 탭메뉴' },
  // { key: 'tooltip', name: '03. 툴팁' },
  // { key: 'modal', name: '04. 모달' },
];

const Gnb = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];

  return (
    <aside className={styles.sidebar}>
      <h2>UI 요소</h2>
      <ul className={styles.menu}>
        {tabList.map(tab => (
          <li
            key={tab.key}
            className={`${styles.menuItem} ${currentPath === tab.key ? styles.active : ''}`}
            onClick={() => navigate(`/${tab.key}`)}
          >
            {tab.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Gnb;
