import { useSelector } from 'react-redux';
import PostCard from '../../posts/PostCard/PostCard';
import { useState } from 'react';
import Post from '../../posts/Post/Post';

const Profile = () => {
  const [listType, setListType] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const userPosts = useSelector((state) => state.auth.posts);
  console.log(userPosts);

  if (!user) return <div>No hay usuario logueado.</div>;

  return (
    <div>
      <h1>Perfil</h1>
      {user.image && <img src={user.image} alt="avatar" />}
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <button
        onClick={() => {
          setListType('followers');
          setModalVisible(true);
        }}
      >
        Seguidores ({user.followers?.length ?? 0})
      </button>

      <button
        onClick={() => {
          setListType('following');
          setModalVisible(true);
        }}
      >
        Siguiendo ({user.following?.length ?? 0})
      </button>

      <h2>Mis Posts</h2>

      {userPosts.map((post) => (
        <PostCard
          key={post._id}
          title={post.title}
          content={post.content}
          image={post.images?.[0]}
          avatar={post.author?.image}
        />
      ))}

      {modalVisible && (
        <div>
          <div>
            <button onClick={() => setModalVisible(false)}>Cerrar</button>

            {listType === 'followers' && (
              <div>
                <h3>Seguidores</h3>
                <ul>
                  {user.followers.map((f) => (
                    <li key={f._id}>{f.username}</li>
                  ))}
                </ul>
              </div>
            )}

            {listType === 'following' && (
              <div>
                <h3>Siguiendo</h3>
                <ul>
                  {user.following.map((f) => (
                    <li key={f._id}>{f.username}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
