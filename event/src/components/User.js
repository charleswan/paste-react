import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import '../assets/css/index.css'

import Info from './User/Info'
import Main from './User/Main'

import UserAdd from './User/UserAdd'
import UserList from './User/UserList'

// 仿自: 饿了么安全应急响应中心(https://security.ele.me/)
// http://react-guide.github.io/react-router-cn/docs/Introduction.html

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是一个 User 组件'
        };
    }
    componentDidMount() {
        console.log(this.props.routes)
    }
    render() {
        return (
            // <div className='user'>
            //     <div className='content'>
            //         <div className='left'>
            //             <Link to='/user/'>个人中心</Link>
            //             <br />
            //             <br />
            //             <Link to='/user/info'>用户信息</Link>
            //         </div>
            //         <div className='right'>
            //             <Route exact path='/user/' component={Main} />
            //             <Route path='/user/info' component={Info} />
            //         </div>
            //     </div>
            // </div>

            <div className='user'>
                <div className='content'>
                    <div className='left'>
                        <Link to='/user/'>用户列表</Link>
                        <br />
                        <br />
                        <Link to='/user/add'>增加用户</Link>
                        <br />
                        <br />
                        <Link to='/user/edit'>编辑用户</Link>
                    </div>
                    <div className='right'>
                        {
                            this.props.routes.map((route, key) =>{
                                return <Route key={key} exact path={route.path} component={route.component}/>
                            })
                        }
                        {/* <Route exact path='/user/' component={UserAdd} />
                        <Route path='/user/add' component={UserList} /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default User;