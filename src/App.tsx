import axios from 'axios';
import { useState, useEffect } from 'react';
import './styles/App.css';

interface IPost {
  _id: string;
  title: string;
  text: string;
  tags: string[];
  viewsCount: number;
  user: {
    _id: string;
    fullName: string;
    avatarUrl: string;
  }
}

interface IPostsResponse {
  success: boolean;
  posts: IPost[]
}

function App() {

  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchPosts = async () => {
    try {
      const response = await axios.get<IPostsResponse>('/api/post');
      if (response.data.success) {
        setPosts(response.data.posts);
        setIsLoading(false);
      }
      console.error('Запрос не удался');
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts()
  }, []);

  if (isLoading) {
    return <h3>Loading ...</h3>
  }

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
