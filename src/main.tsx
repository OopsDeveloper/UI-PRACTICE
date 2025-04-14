import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import rootRouter from './router/root'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={rootRouter} />
);
