import React, { useState } from 'react';

const PostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues?.title || '');
  const [summary, setSummary] = useState(initialValues?.summary || '');
  const [content, setContent] = useState(initialValues?.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, summary, content });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">Submit</button>
    </form>
  );
};

export default PostForm;
