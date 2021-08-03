import Home from './components/Home'
import Topics from './components/Topics'
import About from './components/About'
import Content from './components/Content'
// import News from './components/News'
// import List from './components/List'
// import TodoList from './components/TodoList'
// import TodoList2 from './components/TodoList2'
// import TodoList3 from './components/TodoList3'
// import Parent from './components/Parent';
// import HeaderFather from './components/HeaderFather';
// import AxiosSample from './components/AxiosSample';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Product from './components/Product'
import ProductContent from './components/ProductContent'

function App() {
  return (
    // <div className="App">
    //   {/* 第一种引用方法 */}
    //   {/* <Home />  */}
    //   {/* <hr /> */}
    //   {/* 第二种引用方法 */}
    //   {/* <News></News>  */}
    //   {/* <List /> */}
    //   {/* <TodoList /> */}
    //   {/* <TodoList2 /> */}
    //   {/* <TodoList3 /> */}
    //   {/* <Parent/> */}
    //   {/* <HeaderFather /> */}
    //   {/* <AxiosSample /> */}
    // </div>

    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/content">Content</Link>
          </li>
          <li>
            <Link to="/Product">Product</Link>
          </li>
          <li>
            <Link to="/productcontent">ProductContent</Link>
          </li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/content/:aid" component={Content} />
        <Route path="/Product" component={Product} />
        <Route path="/productcontent" component={ProductContent} />

        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/content">
            <Content />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
