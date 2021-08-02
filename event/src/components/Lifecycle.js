import React, { Component } from 'react'

// react的生命周期函数
// 组件将要挂载时触发的函数：componentWillMount
// 组件挂载完成时触发的函数：componentDidMount
// 是否要更新数据时触发的函数：shouldComponentUpdate
// 将要更新数据时触发的函数：componentWillUpdate
// 数据更新完成时触发的函数：componentDidUpdate
// 组件将要销毁时触发的函数：componentWillUnmount
// 父组件中改变了props传值时触发的函数：componentWillReceiveProps

/*
组件加载的时候触发的函数:
constructor, componentWillMount, render, componentDidMount

组件更新的时候触发的生命周期函数:
shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate

你在父组件里面改变 props 传值的时候触发的:
componentWillReceiveProps

组件销毁的时候触发的:
componentWillUnmount

https://reactjs.org/docs/react-component.html
https://reactjs.org/docs/state-and-lifecycle.html
 */

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }

    componentWillMount() {
        console.log("componentWillMount")
    }
    
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Lifecycle;