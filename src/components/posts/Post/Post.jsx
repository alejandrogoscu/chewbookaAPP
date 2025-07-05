import { useSelector } from 'react-redux';

const Post = () => {
  const dataPosts = useSelector((state) => state.posts.posts);
  const posts = dataPosts?.posts;

  if (!Array.isArray(posts)) {
    return <p>Cargando posts...</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <img src={post.images} />
        </div>
      ))}
    </div>
  );
};

export default Post;
