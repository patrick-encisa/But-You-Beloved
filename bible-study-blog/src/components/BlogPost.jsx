// BlogPost.jsx
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const BlogPost = ({ title, author, date, content }) => {
  return (
    <div className="max-w-3xl mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-2">
        By {author} on {date}
      </p>
      <div className="prose">{content}</div>
    </div>
  );
};

// Define prop types for the BlogPost component
BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default BlogPost;
