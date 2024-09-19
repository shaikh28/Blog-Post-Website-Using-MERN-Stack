import React from 'react';
import PostList from '../components/PostList';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="mb-5">Welcome to the BlogPost</h1> {/* Adjust margin here */}
        <p>
          <Link to="/create" className="btn btn-primary">Create Your Own Blog</Link>
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
