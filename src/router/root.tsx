import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App'; // ✅ Gnb 포함한 전체 레이아웃

// lazy(): 동적 import()를 사용하여 컴포넌트를 비동기적으로 불러온다. 번들 크기를 줄이고 필요할 때만 로드할 수 있도록 한다.
// Suspense: lazy()로 불러온 컴포넌트가 로드될 때까지 대체 UI(fallback)를 보여주는 역할을 한다.

const Accordion = lazy(() => import("../components/accordion/AccordionPage"));
const TabMenu = lazy(() => import("../components/tab/TabMenuPage"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Gnb 포함된 레이아웃
    children: [
      {
        index: true, // '/' 경로일 때 보여줄 컴포넌트
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Accordion />
          </Suspense>
        ),
      },
      {
        path: 'accordion',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Accordion />
          </Suspense>
        ),
      },
      {
        path: 'tab',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <TabMenu />
          </Suspense>
        ),
      },
      // 다른 메뉴들도 여기에 추가 가능
    ],
  },
]);

export default router;




