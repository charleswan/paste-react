import React, { Component } from 'react'
import PropTypes from 'prop-types';

/*
父组件给子组件传值:

defaultProps: 父子组件传值中，如果父组件调用子组件的时候不给子组件传值，则可以在子组件中使用 defaultProps 定义的默认值

propTypes: 验证父组件传值的类型合法性
1. import PropTypes from 'prop-types';
2. 类.propTypes = {
  name: PropTypes.string
};

都是用在子组件里面


https://reactjs.org/docs/typechecking-with-proptypes.html
 */

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '子组件',
            msg: '这是子组件'
        };
    }
    render() {
        return (
            <div>
                <h2>---{this.props.title}</h2>
                <br />
                <h2>---{this.props.num}</h2>
            </div>
        );
    }
}

Header.defaultProps = {
    title: '标题'
}

// 通过 prototypes 定义父组件传给子组件的传值类型
Header.propTypes = {
    num: PropTypes.number
    // num: PropTypes.string
};

export default Header;