import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxTypesHooks';
import { useParams } from 'react-router-dom';
import { fetchOnePost } from '../../store/posts/postThunks';

const PostDetail = () => {
  const dispatch = useAppDispatch();

  const post = useAppSelector(state => state.postReducer.selectedPost);
  const isLoading = useAppSelector(state => state.postReducer.isLoading);
  const error = useAppSelector(state => state.postReducer.error);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      dispatch(fetchOnePost(id))
    }
  }, [dispatch, id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <h2>Это ОДИН ПОСТ</h2>
      <h3>{post.title}</h3>
    </div>
  )
}

export default PostDetail