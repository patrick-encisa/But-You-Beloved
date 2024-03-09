import "./App.css";
import Hero from "./components/Hero";
import BlogList from "./components/BlogList";
// Adjust the import path for blogData.js
import blogPosts from "./data/BlogData";

function App() {
  return (
    <div>
      <Hero />
      <BlogList posts={blogPosts} />
    </div>
  );
}

export default App;
