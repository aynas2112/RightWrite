import React from 'react';
import blogData from '../Components/blog';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { blogId } = useParams();
  const parsedBlogId = parseInt(blogId, 10);
  const blog = blogData.find((blog) => blog.id === parsedBlogId);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  const imagePath = `/Assets/${blog.image}`;

  return (
    <div className="blog-detail-container">
      <h1 style={{ fontSize: '2.5em', textAlign: 'center', margin:'60px 0 0 0' }}>{blog.title}</h1>
      {blog.image && (
        <img
          src={imagePath}
          alt={blog.title}
          style={{
            width: '120%', // Adjust the width as needed
            maxHeight: '500px', // Adjust the max height as needed
            objectFit: 'contain', // Maintain aspect ratio
            margin: '60px 0 20px 0', // Adjust the margin as needed
          }}
        />
      )}

      <p style={{ fontSize: '1.2em', textAlign: 'justify', margin:'60px 0 40px 0' }}>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
