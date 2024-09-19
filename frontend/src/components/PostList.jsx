import React, { useEffect, useState } from 'react';
import { getAllPosts, deletePost } from '../services/PostServices';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);

  useEffect(() => {
    getAllPosts().then(response => setPosts(response.data));
  }, []);

  const handleDelete = (id) => {
    deletePost(id).then(() => {
      setPosts(posts.filter(post => post._id !== id));
      handleClose();
    });
  };

  const handleShow = (id) => {
    setPostIdToDelete(id);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Blog Posts</h1>
      <div className="row">
        {posts.map(post => (
          <div key={post._id} className="col-md-4 mb-4">
            <div className="card h-100">
              {post.image && (
                <img
                  src={`http://localhost:5000/${post.image}`} // Adjust URL based on your server setup
                  alt={post.title}
                  className="card-img-top"
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.summary}</p>
                <p className="card-text">
                  <small className="text-muted">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </small>
                </p>
              </div>
              <div className="card-footer text-center">
                <Link to={`/edit/${post._id}`} className="btn btn-primary me-2">
                  Edit
                </Link>
                <button className="btn btn-danger" onClick={() => handleShow(post._id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDelete(postIdToDelete)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostList;
