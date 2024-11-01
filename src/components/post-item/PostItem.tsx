import { FC } from "react";
import { IPost } from '../../@types/post';
import { Link } from "react-router-dom";

interface PostItemProps {
  posts: IPost[];
}

const PostItem: FC<PostItemProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <li key={post._id}>
          <Link to={`posts/${post._id}`}>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
          </Link>
        </li>
      ))}
    </>
  )
}

export default PostItem;