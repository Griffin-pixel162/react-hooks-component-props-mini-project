
import React from "react";
import Header from "./Header.jsx";
import About from "./About.jsx";
import ArticleList from "./ArticleList.jsx";
import blogData from "../data/blog";

function App() {
  return (
    <div className="App">
      <Header name="Dan's Blog" />
      <aside>
        <About
          image="https://via.placeholder.com/215"
          about="This is a blog about React and JavaScript."
        />
      </aside>
      <main>
        <ArticleList posts={blogData.posts} />
      </main>
    </div>
  );
}

export default App;
