import React, { Component } from 'react'
/*
react-router 可以让根组件动态的去挂载不同的其他组件

根据用户访问的地址动态的加载不同的组件

https://github.com/ReactTraining/react-router

cnpm install react-router-dom --save

docs: https://reactrouter.com/web/example/basic

exact 表示严格匹配
*/
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                About
            </div>
        );
    }
}

export default About;