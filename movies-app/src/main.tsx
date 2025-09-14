import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Head from './components/Layout/Head/Head';
import { UserContextProvider } from './context/user.context';
import Login from './components/Login/Login';
import Favorites from './pages/Favorites/Favorites';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { MoviesContextProvider } from './context/movies.context';
import Movie from './pages/Movie/Movie';

 const router = createBrowserRouter([
   {
     path: "/",
     element: <Head />,
     children: [
       {
         path: "/",
         element: <App />,
       },
       {
         path: "/login",
         element: <Login />,
       },
       {
         path: "/movie/:id",
         element: <Movie />
       },
       {
         path: "/favorites",
         element: <Favorites />,
       },
       {
         path: "*",
         element: <ErrorPage />,
       },
     ],
   },
 ]); 
createRoot(document.getElementById("root") as Element).render(
  <StrictMode>
    <UserContextProvider>
      <MoviesContextProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </MoviesContextProvider>
    </UserContextProvider>
  </StrictMode>
);
