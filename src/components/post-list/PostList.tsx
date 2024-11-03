import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxTypesHooks';

import { fetchPosts } from '../../store/posts/postThunks';
import PostItem from './PostItem';

const PostList: FC = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector((state) => state.postReducer.posts);
  const isLoading = useAppSelector((state) => state.postReducer.isLoading);
  const error = useAppSelector(state => state.postReducer.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) return <h3>Loading ...</h3>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      <PostItem posts={posts} />
    </ul>
  );
};

export default PostList;
