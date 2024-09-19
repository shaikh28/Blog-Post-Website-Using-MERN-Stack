import React, { useEffect, useState } from 'react';
import { getPostById } from '../services/PostServices';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id).then(response => setPost(response.data));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{new Date(post.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default PostPage;
