import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: "First Blog Post",
      description: "This is a brief description of my first blog post. It covers topics on web development and React.",
      date: "October 10, 2024",
    },
    {
      title: "Second Blog Post",
      description: "A second blog post about machine learning and its applications in finance.",
      date: "October 5, 2024",
    }
  ];

  return (
    <div className="blog">
      <div className="blog-title">
      <h1>My Blog</h1></div>
      <div className="blog-container">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p className="blog-date">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
