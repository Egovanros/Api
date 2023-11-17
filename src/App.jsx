import React from "react";
import Albums, {loader as albumsLoader} from "./routes/Albums";
import Album, {loader as albumLoader} from "./routes/Album";
import Users, {loader as usersLoader} from "./routes/Users";
import User, {loader as userLoader} from "./routes/User";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout";
import ErrorPage from "./routes/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        loader: albumsLoader, 
        element: <Albums/>
      },
      {
        path: '/:id',
        loader: albumLoader,
        element: <Album />
      },
      {
        path: '/users',
        loader: usersLoader,
        element: <Users />
      },
      {
        path: '/users/:id',
        loader: userLoader,
        element: <User />
      },
      {
        path: '*',
        element: <ErrorPage/>
      }
    ]
  }
])

export default function App() {
    return <RouterProvider router={router} />
}
