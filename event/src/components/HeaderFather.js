import React, { Component } from "react";
import Header from "./Header";

class HeaderFather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '首页组件',
            msg: '这是父组件',
            count: 20
        };
    }
    render() {
        return (
            <div>
                {/* <Header title={this.state.title} num={this.state.count} /> */}
                <Header title={this.state.title} num='string' />
                {/* <Header /> */}
                <br />
                <hr />
                <hr />

                这是父组件的内容
            </div>

        );
    }
}

export default HeaderFather;