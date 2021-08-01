import React, { Component } from 'react'

export default class Children extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '子组件传值给父组件'
        }
    }

    getNews = ()=>{
        alert(this.props.news.state.msg)
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>

                <button onClick={this.props.run}>调用 news 父组件的 run 方法</button>
                <br /> <br />

                <button onClick={this.props.news.getData}>获取 news 组件的 getData 方法</button>
                <br /> <br />

                <button onClick={this.getNews}>获取整个 news 组件实例</button>
                <br /> <br />

                <button onClick={this.props.news.getChildData.bind(this, '我是子组件的数据')}>子组件给父组件传值</button>
                <br /> <br />

            </div>
        )
    }
}
