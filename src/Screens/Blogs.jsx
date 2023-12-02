import React, { useState } from 'react';
import blogData from '../Components/blog';
import { Button, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [expandedBlogs, setExpandedBlogs] = useState([]);

  const toggleContent = (blogId) => {
    setExpandedBlogs((prevExpandedBlogs) => {
      if (prevExpandedBlogs.includes(blogId)) {
        return prevExpandedBlogs.filter((id) => id !== blogId);
      } else {
        return [...prevExpandedBlogs, blogId];
      }
    });
  };

  return (
    <div className="blogs-container">
      <h1 className='blogs-heading' style={{ fontFamily: 'Dancing Script, cursive', fontSize: '500%' }}>
        Discover the Stories
      </h1>
      {blogData.map((blog) => (
        <div key={blog.id} className="blog-post">
          {blog.image && (
            <CardMedia
              component="img"
              image={blog.image}
              alt={blog.title}
            />
          )}
          <h2>{blog.title}</h2>
          <p>
            {expandedBlogs.includes(blog.id) ? blog.content : `${blog.content.split(' ').slice(0, 10).join(' ')}...`}
          </p>
          <Link to={`/blogs/${blog.id}`}>
            <Button 
              onClick={() => toggleContent(blog.id)}
              style={{ backgroundColor: '#2196f3', color: '#fff' }}
            >
              {expandedBlogs.includes(blog.id) ? 'Read Less' : 'Read More'}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
