import React, { Component } from 'react'

import '../assets/css/index.css'

class TodoList2 extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            name: "111",
            list: []
        };
    }

    addData = () => {
        // alert(this.textInput.current.value)

        var tempList = this.state.list;
        tempList.push(this.textInput.current.value) // 返回值是一个索引值

        this.setState({
            list: tempList
        })

        this.textInput.current.value = ''
    }

    removeData = (key) => {
        var tempList = this.state.list;
        tempList.splice(key, 1);
        
        this.setState({
            list: tempList
        })
    }

    render() {
        return (
            <div>
                <h2>React TodoList 案例演示</h2>
                {/* using React.createRef(): https://reactjs.org/docs/refs-and-the-dom.html#creating-refs */}
                <input ref={this.textInput} /> <button onClick={this.addData}>增加+</button>
                <hr />

                <ul className='list'>
                    {
                        // 用到 this 要注意 this 指向
                        this.state.list.map((value, key) => {
                            return (
                                <li key={key}>{value} ----<button onClick={this.removeData.bind(this, key)}>删除--</button></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList2;