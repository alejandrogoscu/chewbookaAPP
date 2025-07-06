import { useSelector } from 'react-redux';
import PostCard from '../../posts/PostCard/PostCard';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const posts = useSelector((state) => state.auth.posts);

  if (!user) return <div>No hay usuario logueado.</div>;

  return (
    <div>
      <h1>Perfil</h1>
      {user.image && (
        <img src={user.image} alt="avatar" />
      )}
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <p><strong>Seguidores:</strong> {user.followers?.length ?? 0}</p>
      <p><strong>Siguiendo:</strong> {user.following?.length ?? 0}</p>
      <h2>Mis Posts</h2>
      {posts && posts.length > 0 ? (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <div>No tienes posts.</div>
      )}
    </div>
  );
};

export default Profile;
