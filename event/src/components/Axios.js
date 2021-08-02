import React, { Component } from 'react'
import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'

/*
一、https://www.npmjs.com/ 搜索 axios
1. cnpm install axios --save
2. 在哪里使用就在哪里引入 import axios from 'axios'
3. read docs

二、fetch-jsonp https://github.com/camsong/fetch-jsonp
1. 安装 cnpm install fetch-jsonp --save
2. import fetchJsonp from 'fetch-jsonp' 
3. read docs
 */

class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    getData = () => {
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'; // 这个接口后台允许了跨域。域名、端口、协议有任何一个不同，都属跨域。

        axios.get(api)
            .then((response) => {
                // handle success
                console.log(response.data.result);

                // 用到 this 要注意 this 指向

                this.setState({
                    list: response.data.result
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    getDataJsonp = () => {
        // 下面这个接口需要支持 jsonp。如何验证：https://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=xxx 若是返回值中把 xxx 打印到最前面就说明支持。
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'; 
        fetchJsonp(api)
            .then(function (response) {
                return response.json()
            }).then((json) => {
                // handle success
                console.log(json.result);

                // 用到 this 要注意 this 指向

                this.setState({
                    list: json.result
                })
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }

    // 组件的生命周期函数
    componentDidMount(){
        this.getData();
    }

    render() {
        return (
            <div>
                <h2>axios 获取服务器数据</h2>
                <button onClick={this.getData}>获取服务器 api 接口数据 axios</button>

                <hr />
                <button onClick={this.getDataJsonp}>获取服务器 api 接口数据 jsonp</button>

                <ul>
                    {
                        // 遍历
                        this.state.list.map((value, key) => {
                            return <li key={key}>{value.title}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Axios;