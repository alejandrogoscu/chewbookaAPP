import Layout from '../common/Layout/Layout';
import Posts from '../posts/Posts/Posts';
import './dashboard.css';

const Dashboard = () => {
  return (
    <>
      <Layout>
        <div className="dashboard">
          <div className="feed">
            <Posts />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
