import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

/*
实现 js 跳转路由：
1. 要引入 Redirect
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
2. 定义一个 flag
        this.state = {
            loginFlag: false
        };
3.render 里面判断 flag 决定是否跳转
        if (this.state.loginFlag) {
            return <Redirect to={{ pathname: "/" }} />
        }
4. 要执行跳转
通过 js 改变 loginFlag 的状态
改变以后从新 render 就可以通过 Redirect 自己来跳转
 */

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginFlag: false
        };
    }
    doLogin = (e) => {
        e.preventDefault()
        let username = this.refs.username.value
        let password = this.refs.password.value
        // console.log(username)
        // console.log(password)
        if (username === 'admin' && password === '123456') {
            // success，通过 js 跳转路由
            this.setState({
                loginFlag: true
            })
        } else {
            alert('登录失败')
        }
    }
    render() {
        if (this.state.loginFlag) {
            // return <Redirect to={{ pathname: "/" }} />
            return <Redirect to='/' />
        }
        return (
            <div>
                <form onSubmit={this.doLogin}>
                    <input type="text" ref="username" /> <br />
                    <input type="password" ref="password" /> <br />
                    <input type="submit" value="执行登录" /> <br />
                </form>
                {/* <button>执行登录</button> */}
            </div>
        );
    }
}

export default Login;