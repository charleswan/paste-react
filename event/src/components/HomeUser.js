import React, { Component } from 'react'

import '../assets/css/index.css'

class HomeUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: '我是一个home组件'
         };
    }
    render() {
        return (
            <div className='home'>
                我是一个home组件
            </div>
        );
    }
}

export default HomeUser;