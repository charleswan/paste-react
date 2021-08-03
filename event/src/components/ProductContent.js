import React, { Component } from 'react'
import url from 'url'

/**
 * cnpm install url --save
 */

class ProductContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        // console.log(url.parse(this.props.location.search, true))
        var aid = url.parse(this.props.location.search, true).query.aid
        console.log(aid)
    }

    render() {
        return (
            <div>
                我是商品详情组件
            </div>
        );
    }
}

export default ProductContent;