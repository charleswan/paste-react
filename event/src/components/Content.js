import React, { Component } from 'react'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        console.log(this.props.match.params.aid)
    }
    render() {
        return (
            <div>
                我是 Topic 详情
            </div>
        );
    }
}

export default Content;