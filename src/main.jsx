import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchSection from './components/SearchSection';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ErrorPage from './components/ErrorPage'; 
import JokesPage from './components/JokesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: '/jokes page',
    element: (
      <>
        <Header />
        <JokesPage />
      </>
    ),
  },
  {
    path: '/to-do-list',
    element: (
      <>
        <Header />
        <SearchSection />
      </>
    ),
  },
  {
    path: '/about us',
    element: (
      <>
        <Header />
        <AboutUs />
      </>
    ),
  },
  {
    path: '*', 
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
