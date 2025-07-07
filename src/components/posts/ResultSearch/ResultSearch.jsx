import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { searchByTitle } from "../../../features/posts/postsSlice";
import Post from '../Post/Post';

const ResultSearch = () => {
   const [text, setText] = useState("")
    const navigate = useNavigate()
    const handleSearch = (e) => {
        setText(e.target.value);
        if (e.key === "Enter") {
            navigate(`title/${text}`)
        }
      }
    const {title} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchByTitle(title))
    }, [title]);
  return (
      <div> 
      <input onKeyUp={handleSearch} placeholder='Busca aquí' name="text" /> 
      </div>
  )
}

export default ResultSearch;