import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: "Probability and Statistics Class",
      // need description of the class (review)
      description: "This class covers topics on probability and statistics, including concepts like random variables, probability distributions, and statistical tests.",
      date: "October 10, 2024",
      
    },
    {
      title: "Power BI class",
      // need description of the class (review)
      description: "In this class, you'll learn how to create interactive dashboards using Microsoft Power BI. You'll also learn how to use advanced features like data modeling, predictive analytics, and machine learning.",
      date: "October 5, 2024",
    },
    {
      title: "Git and react class",
      // need description of the class (review)
      description: "In this class, you'll learn how to use Git for version control, collaborate with others on projects, and create a professional development portfolio.",
      date: "October 1, 2024",
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
