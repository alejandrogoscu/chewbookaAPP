import { Tabs } from 'antd';
import PostCard from '../../../posts/PostCard/PostCard';
import './profileTabs.css';

const ProfileTabs = ({ user, userPosts }) => {
  const tabsItems = [
    {
      key: '1',
      label: 'Mis Posts',
      children: (
        <>
          {userPosts.length === 0 && <p>No hay posts disponibles.</p>}
          {userPosts.map((post) => (
            <PostCard
              key={post._id}
              title={post.title}
              content={post.content}
              image={post.images?.[0]}
              avatar={post.author?.image}
            />
          ))}
        </>
      ),
    },
    {
      key: '2',
      label: `Seguidores (${user.followers?.length ?? 0})`,
      children: (
        <>
          {user.followers?.length === 0 ? (
            <p>No tiene seguidores.</p>
          ) : (
            <ul>
              {user.followers.map((f) => (
                <li key={f._id}>{f.username}</li>
              ))}
            </ul>
          )}
        </>
      ),
    },
    {
      key: '3',
      label: `Siguiendo (${user.following?.length ?? 0})`,
      children: (
        <>
          {user.following?.length === 0 ? (
            <p>No sigue a nadie.</p>
          ) : (
            <ul>
              {user.following.map((f) => (
                <li key={f._id}>{f.username}</li>
              ))}
            </ul>
          )}
        </>
      ),
    },
  ];

  return <Tabs className="profile__tabs" centered size="large" defaultActiveKey="1" items={tabsItems} />;
};

export default ProfileTabs;
