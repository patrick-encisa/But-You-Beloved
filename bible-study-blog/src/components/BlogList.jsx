// BlogList.jsx
import React from "react";
import BlogPost from "./BlogPost";
import PropTypes from "prop-types"; // Import PropTypes

const BlogList = ({ posts }) => {
  return (
    <div className="animate-fadeIn">
      {posts.map((post) => (
        <BlogPost key={post.id} {...post} />
      ))}
    </div>
  );
};

// Define prop types for the BlogList component
BlogList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BlogList;
