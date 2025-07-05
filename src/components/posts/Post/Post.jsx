import { useSelector } from 'react-redux';

const Post = () => {
  const postsState = useSelector((state) => state.posts.posts);
  const posts = postsState.posts;

  console.log(posts);
  const post = posts.map((post) => {
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <img src={post.images}></img>
      </div>
    );
  });

  return <div>{post}</div>;
};
export default Post;
