import { useSelector } from 'react-redux';

const Profile = () => {
  /* const { user } = useSelector((state) => state.auth);
  const { posts, comments } = useSelector((state) => state.auth); */

  return (
    <div>
      <h1>Profile</h1>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
