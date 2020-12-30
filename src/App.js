import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllBlogs from "./components/AllBlogs/AllBlogs";
import SpecificBlog from "./components/SpecificBlog/SpecificBlog";
import BlogProvider from "./Context/BlogContext";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BlogProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/all-blogs">
              <AllBlogs cat={"react"} />
            </Route>
            <Route exact path="/all-blogs/react">
              <AllBlogs cat={"react"} />
            </Route>
            <Route exact path="/all-blogs/php">
              <AllBlogs cat={"php"} />
            </Route>
            <Route exact path="/all-blogs/java">
              <AllBlogs cat={"java"} />
            </Route>
            <Route exact path="/all-blogs/python">
              <AllBlogs cat={"python"} />
            </Route>
            <Route exact path="/all-blogs/iot">
              <AllBlogs cat={"iot"} />
            </Route>
            <Route exact path="/all-blogs/DBMS">
              <AllBlogs cat={"dbms"} />
            </Route>
            <Route exact path="/all-blogs/c">
              <AllBlogs cat={"c"} />
            </Route>
            <Route exact path="/all-blogs/cpp">
              <AllBlogs cat={"cpp"} />
            </Route>

            <Route path="/specific-blog/:id" component={SpecificBlog} exact />
          </Switch>
        </div>
      </Router>
      <Footer />
    </BlogProvider>
  );
}

export default App;
