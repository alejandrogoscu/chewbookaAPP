import { useSelector } from 'react-redux'

const Post = ({ posts }) => {
console.log('Tipo de posts:', typeof posts); //Es un objeto
if (!Array.isArray(posts)) {
    return <p>No hay posts disponibles o el formato es incorrecto.</p>;
  }
const listaPosts = Array.isArray(posts)
  ? posts 
  : posts.data
  ? posts.data
  : Object.values(posts);

  return (
    <div>
        {listaPosts.map((post, index) => (
          <div className='post' key={post._id || index}>
              <p>{post.title}</p>
          </div>
        ))}
    </div>
  )
}
export default Post;

  