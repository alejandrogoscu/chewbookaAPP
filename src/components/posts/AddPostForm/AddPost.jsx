import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { createPost } from '../../../features/posts/postsSlice';

const NewPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    title: '',
    content: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = ({ file }) => {
    setData((prev) => ({ ...prev, image: file.originFileObj || file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    formData.append('image', data.image);

    try {
      await dispatch(createPost(formData));
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" style={{ maxWidth: 600, margin: '0 auto' }}>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="title">Título:</label>
        <Input
          id="title"
          name="title"
          value={data.title}
          onChange={handleChange}
          required
          placeholder="Ingrese título"
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <label htmlFor="content">Contenido:</label>
        <Input.TextArea
          id="content"
          name="content"
          value={data.content}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Ingrese contenido"
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <label>Imagen:</label>
        <Upload beforeUpload={() => false} maxCount={1} onChange={handleImageChange} accept="image/*">
          <Button icon={<UploadOutlined />}>Seleccionar imagen</Button>
        </Upload>
      </div>

      <Button type="primary" htmlType="submit">
        Crear post
      </Button>
    </form>
  );
};

export default NewPost;
