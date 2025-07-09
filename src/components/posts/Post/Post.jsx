import { useSelector } from 'react-redux';
import PostCard from '../PostCard/PostCard';
import { Link } from 'react-router-dom';

const Post = () => {
  // Permite que funcione tanto si es un array como si es un objeto con clave 'posts'
  const dataPosts = useSelector((state) => state.posts.posts);
  const posts = Array.isArray(dataPosts) ? dataPosts : dataPosts?.posts;

  if (!Array.isArray(posts)) {
    return <p>Cargando posts...</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <Link to={'/posts/' + post._id}>
        <PostCard key={post._id} {...post} />
        </Link>
      ))}
    </div>
  );
};

export default Post;
