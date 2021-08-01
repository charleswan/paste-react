import React from "react";

import logo from '../assets/images/beauty.jpg';
import '../assets/css/index.css'

class News extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Mee",
            tag: "I love Mee",
            userinfo: {
                character: "smart",
                list: ['111', '222', '333'],
                list2: [<h2 key='1' > h2h21 </h2>, <h2 key='2'>h2h22</h2 >
                ],
                list3: [
                    { title: "新闻111" },
                    { title: "新闻222" },
                    { title: "新闻333" },
                    { title: "新闻444" }
                ]
            }
        };
    }

    render() {
        let listResult = this.state.userinfo.list.map(function (value, key) {
            return <li key={key} > {value} </li>
        })

        return (
            <div className='news'>
                <h2 > {this.state.tag}(From News) </h2>

                <img alt='girl' src={logo} />
                <img alt='beauty' src={require('../assets/images/beauty.jpg').default} />
                <img alt='beauty' src='https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png' />

                <ul>
                    <li> 这是一个列表 </li>
                    <li> 这是一个列表 </li>
                    <li> 这是一个列表 </li>
                </ul>

                <hr />

                {this.state.userinfo.list2}

                <hr />

                <ul> {listResult} </ul>

                {
                    this.state.userinfo.list3.map(function (value, key) {
                        return <li key={key}> {value.title} </li>;
                    })
                }

            </div>
        )
    }
}

export default News;