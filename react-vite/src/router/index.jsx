import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import Genres from '../components/Genres/Genres'
import Djdle from '../components/Djdle/Djdle'
import Welcome from '../components/Welcome/Welcome';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/genres",
        element: <Genres />
      },
      {
        path: "/djdle",
        element: <Djdle />
      }
    ],
  },
  {
    path: "/",
    element: <Welcome />,
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
