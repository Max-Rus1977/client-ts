import { FC } from "react";
import { IPost } from '../../@types/post';

interface PostItemProps {
  posts: IPost[];
}

const PostItem: FC<PostItemProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <li key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.text}</p>
        </li>
      ))}
    </>
  )
}

export default PostItem;