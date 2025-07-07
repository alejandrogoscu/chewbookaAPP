import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
          <Link to={'/posts/' + post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <img src={post.images} style={{ maxWidth: '400px' }} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Post;
