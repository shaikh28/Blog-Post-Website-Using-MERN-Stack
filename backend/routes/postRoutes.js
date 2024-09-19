const express = require("express");
const router = express.Router();
const BlogPost = require("../models/blogPost");


router.get("/posts", async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
router.put("/posts/:id", async (req, res) => {
  const { title, summary, content } = req.body;
  try {
    const updatedPost = await BlogPost.findByIdAndUpdate(
      req.params.id,
      { title, summary, content },
      { new: true } // This option returns the updated document
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/posts", async (req, res) => {
  const { title, summary, content } = req.body;
  const newPost = new BlogPost({ title, summary, content });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/posts/:id", async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ message: "Post Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports =router