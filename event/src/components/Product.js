import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    aid: '111',
                    title: '我是商品 111'
                },
                {
                    aid: '222',
                    title: '我是商品 222'
                },
                {
                    aid: '333',
                    title: '我是商品 333'
                },
                {
                    aid: '444',
                    title: '我是商品 444'
                }
            ]
        };
    }
    render() {
        return (
            <div>
                我是商品组件
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            return (
                                <li key={key}>
                                    <Link to={`/productcontent?aid=${value.aid}`}>{value.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Product;