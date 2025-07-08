import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { searchByTitle } from '../../../features/posts/postsSlice';

import PostCard from '../PostCard/PostCard';

const ResultSearch = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const filteredPosts = useSelector((state) => state.posts.filteredPosts);
  
  const handleSearch = (e) => {
    const value = e.target.value.trim();
    setText(value);

    if (e.key === 'Enter' && value) {
      navigate(`/search/title/${value}`);
    }
  };

  const { title } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchByTitle(title));
  }, [title]);

  return (
    <div>
      <h1>Search Post</h1>
      <input onKeyUp={handleSearch} placeholder="Busca aquí" name="text" />

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
        <p>No se encontraron posts con ese título.</p>
      )}
    </div>
  );
};

export default ResultSearch;
