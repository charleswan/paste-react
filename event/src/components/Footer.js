import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: '我是一个底部组件'
         };
    }

    run=()=>{
        alert('我是底部组件的 run 方法')
    }
    
    render() {
        return (
            <div>
                <h2>我是一个底部组件</h2>
            </div>
        );
    }
}

export default Footer;