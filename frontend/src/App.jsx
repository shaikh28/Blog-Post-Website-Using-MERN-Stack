import { useState } from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './components/PostPage';
import CreatePostPage from './pages/CreatePostPage';
import EditPostPage from './pages/EditPostPage';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/edit/:id" element={<EditPostPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
