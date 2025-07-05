import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../features/users/userSlice";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import UserCard from "./UserCard/UserCard";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, posts, isLoading, error } = useSelector((state) => state.user);
  const isAuth = useSelector((state) => !!state.auth.token);

  useEffect(() => {
    if (isAuth) {
      dispatch(getProfile());
    }
  }, [dispatch, isAuth]);

  if (!isAuth) return <p>No estás logueado.</p>;
  if (isLoading) return <p>Cargando perfil...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>No se encontró el usuario.</p>;

  return (
    <div className="profile-page">
      <ProfileInfo user={user} />
      <h3>Mis publicaciones</h3>
      <div className="posts-grid">
        {(!posts || posts.length === 0) ? (
          <p>No tienes publicaciones todavía.</p>
        ) : (
          posts.map((post) => (
            <UserCard
              key={post._id}
              image={post.images && post.images[0] ? post.images[0] : "https://via.placeholder.com/300"}
              title={post.title}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Profile; 