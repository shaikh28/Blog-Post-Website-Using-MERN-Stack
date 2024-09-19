import React, { useEffect, useState } from 'react';
import { getPostById, updatePost } from '../services/PostServices';
import PostForm from '../components/PostForm';
import { useNavigate, useParams } from 'react-router-dom';

const EditPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id).then(response => setPost(response.data));
  }, [id]);

  const handleUpdate = (updatedPost) => {
    updatePost(id, updatedPost).then(() => navigate(`/posts/${id}`));
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="w-75 w-md-50">
        <h1 className="text-center mb-4">Edit Post</h1>
        <PostForm onSubmit={handleUpdate} initialValues={post} />
      </div>
    </div>
  );
};

export default EditPostPage;
