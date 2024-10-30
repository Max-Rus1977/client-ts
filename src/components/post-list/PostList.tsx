import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxTypesHooks';

import { fetchPosts } from '../../store/posts/thunks';
import PostItem from '../post-item/PostItem';

const PostList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postReducer.posts);
  const isLoading = useAppSelector((state) => state.postReducer.isLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) return <h3>Loading ...</h3>;

  return (
    <ul>
      <PostItem posts={posts} />
    </ul>
  );
};

export default PostList;
