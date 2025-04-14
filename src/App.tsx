import { Outlet } from 'react-router-dom';
import Gnb from './components/Gnb';

const App = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Gnb />
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet /> {/* 자식 페이지가 여기에 렌더링됨 */}
      </main>
    </div>
  );
};

export default App;