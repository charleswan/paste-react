import React, { Component } from 'react'
import axios from 'axios'

/*
https://www.npmjs.com/ 搜索 axios
1. cnpm install axios --save
2. 在哪里使用就在哪里引入 import axios from 'axios'
3. read docs
 */

class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getData = () => {
        var api = '/test01'

        axios.get(api)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    render() {
        return (
            <div>
                <h2>axios 获取服务器数据</h2>
                <button onClick={this.getData}>获取服务器 api 接口数据</button>
            </div>
        );
    }
}

export default Axios;