import { useDispatch, useSelector } from 'react-redux';
import ProfileTabs from './ProfileTabs/ProfileTabs';
import { useState } from 'react';
import './profile.css';
import Logout from '../../auth/Logout/Logout';

const Profile = () => {
  const dispatch = useDispatch();
  const [listType, setListType] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const userPosts = useSelector((state) => state.auth.posts);

  if (!user) return <div>No hay usuario logueado.</div>;

  return (
    <>
      <div className="profile__container">
        <section className="profile__infoCard">
          <div className="profile__userInfo-wrapper">
            {user.image && <img className="profile__userImg" src={user.image} alt="avatar" />}

            <div className="profile__userText">
              <h2 className="profile__username">{user.username}</h2>
              <span className="profile__email">{user.email}</span>
            </div>
          </div>

          <div className="profille__userBio-wrapper">
            <p>{user.bio}</p>
          </div>
        </section>

        <ProfileTabs user={user} userPosts={userPosts} />

        <Logout />
      </div>
    </>
  );
};

export default Profile;
