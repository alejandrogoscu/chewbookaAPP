import Background from '../common/Layout/Background';
import Posts from '../posts/Posts/Posts';
import './dashboard.css';

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="feed">
          <Posts />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
