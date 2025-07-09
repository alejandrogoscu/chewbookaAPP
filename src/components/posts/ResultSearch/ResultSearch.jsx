import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { searchByTitle } from '../../../features/posts/postsSlice';
import PostCard from '../PostCard/PostCard';
import { Input } from 'antd';
import { useEffect } from 'react';
const { Search } = Input;
import './resultSearch.css';

const ResultSearch = () => {
  const navigate = useNavigate();
  const filteredPosts = useSelector((state) => state.posts.filteredPosts);

  const handleSearch = (value) => {
    const trimmed = value.trim();
    if (trimmed) {
      navigate(`/search/title/${trimmed}`);
    }
  };

  const { title } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchByTitle(title));
  }, [title]);

  return (
    <div>
      <div className="search__input-container">
        <Search className="search__input" placeholder="input search text" onSearch={handleSearch} enterButton />
      </div>
      {filteredPosts && filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            content={post.content}
            image={post.images?.[0]}
            avatar={post.author?.image}
          />
        ))
      ) : (
        <p className="search__text">No se encontraron posts con ese título.</p>
      )}
    </div>
  );
};

export default ResultSearch;
