import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AllBlogs from "./components/AllBlogs/AllBlogs";
import SpecificBlog from "./components/SpecificBlog/SpecificBlog";
import BlogProvider from "./Context/BlogContext";

function App() {
  return (
    <BlogProvider>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/all-blogs" component={AllBlogs} exact />
            <Route path="/specific-blog/:id" component={SpecificBlog} exact />
          </Switch>
          <Footer />
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;
