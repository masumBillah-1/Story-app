import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router'; 
import router from './Routes/router';

import Homepage from './pages/Homepage.jsx'
import PublicStory from './components/PublicStory.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage />
<PublicStory />


  </StrictMode>,
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);