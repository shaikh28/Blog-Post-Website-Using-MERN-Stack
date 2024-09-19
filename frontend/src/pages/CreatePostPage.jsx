import React from 'react';
import { createPost } from '../services/PostServices';
import PostForm from '../components/PostForm';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
  const navigate = useNavigate();

  const handleCreate = (post) => {
    createPost(post).then(() => navigate('/'));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h1 className="text-center mb-4">Create New Post</h1>
          <PostForm onSubmit={handleCreate} />
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
