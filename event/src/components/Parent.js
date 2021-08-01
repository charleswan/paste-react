import React, { Component } from 'react'

// 父子组件: 组件的相互调用中，我们把调用的称为父组件，被调用者称为子组件。
/*
父组件给子组件传值：
1. 在调用子组件的时候定义一个属性 <Header msg='首页'></Header>
2. 子组件里面 this.props.msg

父组件主动获取子组件的数据
1. 调用子组件的时候指定 ref 的值 <Header ref='Header'></Header>
2. 父组件通过 this.refs.Header 获取整个子组件实例 (dom(组件) 加载完成以后获取)
 */
import Children from './Children'
import Footer from './Footer'

export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '新闻组件',
            msg: '我是新闻组件的 msg'
        }
    }

    run = () => {
        alert('我是父组件的 run 方法')
    }

    // 获取子组件里面传过来的数据
    getChildData = (result) => {
        alert(result);
        this.setState({
            msg: result
        })
    }

    getData = () => {
        alert(this.state.title)
    }

    // 父组件主动调用子组件的数据和方法
    getFooter = () => {
        alert(this.refs.footer.state.msg); // 获取子组件的数据
        this.refs.footer.run();
    }

    render() {
        return (
            <div>
                <Children title={this.state.title} run={this.run} news={this} />
                <br />
                <br />
                这是新闻组件的内容 -- {this.state.msg}

                <br />

                <button onClick={this.getFooter}>获取整个底部组件</button>
                <hr/>
                <br />
                <br />
                <Footer ref='footer' />

            </div>
        )
    }
}
