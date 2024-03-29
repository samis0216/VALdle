import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import Genres from '../components/Genres/Genres'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <h1>Welcome!</h1>,
      },
      {
        path: "/genres",
        element: <Genres />
      }
    ],
  },
  {
    path: "login",
    element: <LoginFormPage />,
  },
  {
    path: "signup",
    element: <SignupFormPage />,
  }
]);
