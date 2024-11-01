import { createBrowserRouter } from "react-router-dom";

import App from './App';
import PostDetail from './components/post-detail/PostDetail';
import ErrorPage from "./components/error-page/ErrorPage";
import PostList from "./components/post-list/PostList";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: 'posts' 
        // будет отображаться при загрузке на главном маршруте
        index: true,
        element: <PostList />,
      },
      {
        path: 'posts/:id',
        element: <PostDetail />,
      }
    ]
  },
]);