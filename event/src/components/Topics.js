import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";

class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    aid: '111',
                    title: '我是新闻 111'
                },
                {
                    aid: '222',
                    title: '我是新闻 222'
                },
                {
                    aid: '333',
                    title: '我是新闻 333'
                },
                {
                    aid: '444',
                    title: '我是新闻 444'
                }
            ]
        };
    }
    render() {
        return (
            <div>
                Topics
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            return (
                                <li key={key}>
                                    <Link to={`/content/${value.aid}`}>{value.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Topics;