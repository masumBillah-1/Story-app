import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router'; 
import router from './Routes/router';

// import Homepage from './pages/Homepage.jsx'

// import ArticlePage from './pages/StoryFlow/ArticlePage.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
   
//     <ArticlePage/>
//   </StrictMode>,
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

