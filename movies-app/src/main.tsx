import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Head from './components/Layout/Head/Head';
import { UserContextProvider } from './context/user.context';
import Favorites from './pages/Favorites/Favorites';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { MoviesContextProvider } from './context/movies.context';
import Movie from './pages/Movie/Movie';
import LoginPage from './pages/LoginPage/LoginPage';
import axios, { AxiosError } from 'axios';
import { PREFIX_URL } from './helpers/API';
import { IMovieDescription, IMovieDetails, MovieDetails } from './interfaces/movies.interface';
import RequiredAuth from './helpers/RequiredAuth';

 const router = createBrowserRouter([
   {
     path: "/",
     element: <Head />,
     children: [
       {
         path: "/",
         element: (
           <RequiredAuth>
             <App />
           </RequiredAuth>
         ),
       },
       {
         path: "/login",
         element: <LoginPage />,
       },
       {
         path: "/movie/:id",
         element: (
           <RequiredAuth>
             <Movie />
           </RequiredAuth>
         ),
         errorElement: <ErrorPage />,
         loader: async ({ params }) => {
           try {
             const {
               data: { short: movieDetails, imdbId: id },
             } = await axios.get<IMovieDetails>(
               `${PREFIX_URL}/?tt=${params.id}`
             );
             const movieInfo: MovieDetails = Object.create(null);

             movieInfo.type = movieDetails["@type"];
             movieInfo.rating = movieDetails.aggregateRating.ratingValue;
             movieInfo.duration = movieDetails.duration;
             movieInfo.description = movieDetails.description;
             movieInfo.genre = movieDetails.genre;
             movieInfo.id = id;
             movieInfo.releaseDate = new Date(
               movieDetails.datePublished
             ).getFullYear();
             movieInfo.image = movieDetails.image;
             movieInfo.title = movieDetails.name;
             movieInfo.review = movieDetails.review;

             return movieInfo;
           } catch (e) {
             if (e instanceof AxiosError) {
               console.error(e);
               return;
             }
           }
         },
       },
       {
         path: "/favorites",
         element: (
           <RequiredAuth>
             <Favorites />
           </RequiredAuth>
         ),
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
        <RouterProvider router={router} />
      </MoviesContextProvider>
    </UserContextProvider>
  </StrictMode>
);
