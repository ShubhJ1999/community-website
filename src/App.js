import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllBlogs from "./components/AllBlogs/AllBlogs";
import SpecificBlog from "./components/SpecificBlog/SpecificBlog";
import BlogProvider from "./Context/BlogContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import WriteBlog from "./components/WriteBlog/WriteBlog";

function App() {
  return (
    <BlogProvider>
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/all-blogs" component={AllBlogs} exact />
            <Route path="/specific-blog/:id" component={SpecificBlog} exact />
            <Route path="/write-blog" component={WriteBlog} exact />
          </Switch>
        </div>
      </Router>
      <Footer />
    </BlogProvider>
  );
}

export default App;
