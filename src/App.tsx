import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { fetchPosts } from './store/postsSlice';

import './styles/App.css';

function App() {

  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postReducer.posts);
  const isLoading = useAppSelector((state) => state.postReducer.isLoading)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  if (isLoading) return <h3>Loading ...</h3>

  return (
    <div className="app">
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
