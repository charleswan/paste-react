// import Topics from './components/Topics'
// import About from './components/About'
// import Content from './components/Content'
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
// import Product from './components/Product'
// import ProductContent from './components/ProductContent'
// import Pcontent from './components/Pcontent'
// import Background from './components/Background'
// import Login from './components/Login'

// import User from './components/User'
// import Shop from './components/Shop';
// import HomeUser from './components/HomeUser'

import routes from './model/router';

{/* <Router>
<div>
  <header className='title'>
    <Link to='/'>首页组件</Link>
    <Link to='/user'>用户组件</Link>
    <Link to='/shop'>商户组件</Link>
  </header>

  <Route exact path='/' component={HomeUser}/>
  <Route path='/user' component={User}/>
  <Route path='/shop' component={Shop}/>
  <Route />
</div>
</Router> */}



// const routes = [
//   {
//     path: "/sandwiches",
//     component: Sandwiches
//   },
//   {
//     path: "/tacos",
//     component: Tacos,
//     routes: [
//       {
//         path: "/tacos/bus",
//         component: Bus
//       },
//       {
//         path: "/tacos/cart",
//         component: Cart
//       }
//     ]
//   }
// ];

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

    // <Router>
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/topics">Topics</Link>
    //       </li>
    //       <li>
    //         <Link to="/content">Content</Link>
    //       </li>
    //       <li>
    //         <Link to="/Product">Product</Link>
    //       </li>
    //       <li>
    //         <Link to="/productcontent">ProductContent</Link>
    //       </li>
    //     </ul>

    // <Route exact path="/" component={Home} />
    // <Route path="/about" component={About} />
    // <Route path="/topics" component={Topics} />
    // <Route path="/content/:aid" component={Content} />
    // <Route path="/Product" component={Product} />
    // <Route path="/productcontent" component={ProductContent} />

    // {/* <Switch>
    //   <Route path="/about">
    //     <About />
    //   </Route>
    //   <Route path="/topics">
    //     <Topics />
    //   </Route>
    //   <Route path="/">
    //     <Home />
    //   </Route>
    //   <Route path="/content">
    //     <Content />
    //   </Route>
    // </Switch> */}
    // </div>
    // </Router>

    // <div>
    //   <h2>react 请求数据实现 无人点餐、无人收银系统 商品列表 商品详情</h2>
    // </div>

    // <Router>
    //   <div>
    //     <Route exact path="/" component={Background} />
    //     <Route exact path="/login" component={Login} />
    //     <Route path="/pcontent/:id" component={Pcontent} />
    //   </div>
    // </Router>

    <Router>
      <div>
        <header className='title'>
          <Link to='/'>首页组件</Link>
          <Link to='/user'>用户组件</Link>
          <Link to='/shop'>商户组件</Link>
        </header>

        {/* <Route exact path='/' component={HomeUser} />
        <Route path='/user' component={User} />
        <Route path='/shop' component={Shop} />
        <Route /> */}
        {
          routes.map((route, key) => {
            // if (route.exact) {
            //   return <Route key={key} exact path={route.path} component={route.component} routes={route.routes}/>
            // } else {
            //   return <Route key={key} path={route.path} component={route.component} routes={route.routes}/>
            // }
            if (route.exact) {
              return <Route key={key} exact path={route.path}
                render={props => (
                  // pass the sub-routes down to keep nesting
                  <route.component {...props} routes={route.routes} />
                )}
              />
            } else {
              return <Route key={key} path={route.path}
                render={props => (
                  // pass the sub-routes down to keep nesting
                  <route.component {...props} routes={route.routes} />
                )}
              />
            }
          })
        }
      </div>
    </Router>
  );
}

export default App;
