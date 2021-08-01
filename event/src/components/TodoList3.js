import React, { Component } from 'react'

import '../assets/css/index.css'

// 引入自定义模块
import storage from '../model/storage';

class TodoList3 extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            list: [
                // {
                //     title: '录制 ionic',
                //     checked: true
                // },
                // {
                //     title: '录制 nodejs',
                //     checked: true
                // },
                // {
                //     title: '录制 egg.js',
                //     checked: false
                // },
                // {
                //     title: '录制 vue',
                //     checked: false
                // },
            ]
        };
    }
    addData = (e) => {
        if (e.keyCode === 13) {
            let title = this.textInput.current.value;
            // alert(title);
            let tempList = this.state.list;

            tempList.push({
                title: title,
                checked: false
            })

            this.setState({
                list: tempList
            })

            this.textInput.current.value = ''

            // 缓存数据
            // localStorage.setItem('todolist', JSON.stringify(tempList));
            storage.set('todolist',tempList)
        }
    }

    checkboxChange = (key) => {
        // alert('111')
        let tempList = this.state.list;
        tempList[key].checked = !tempList[key].checked
        this.setState({
            list: tempList
        })
        // 缓存数据
        // localStorage.setItem('todolist', JSON.stringify(tempList));
        storage.set('todolist',tempList)
    }

    removeData = (key) => {
        let tempList = this.state.list;
        tempList.splice(key, 1);
        this.setState({
            list: tempList
        })
        // 缓存数据
        // localStorage.setItem('todolist', JSON.stringify(tempList));
        storage.set('todolist',tempList)
    }

    // 生命周期函数 页面加载就会触发
    componentDidMount(){
        // 获取缓存的数据
        // var todolist = JSON.parse(localStorage.getItem('todolist'));
        var todolist = storage.get('todolist');
        if (todolist) {
            this.setState({
                list:todolist
            })
        }
    }

    render() {
        return (
            <div>
                <header className='title'>TodoList:  <input ref={this.textInput} onKeyUp={this.addData} /></header>
                <h2>待办事项</h2>
                <hr />
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            if (!value.checked) {
                                return (
                                    <li key={key}>
                                        <input type='checkbox' checked={value.checked} onChange={this.checkboxChange.bind(this, key)} />

                                        {value.title}

                                        -- <button onClick={this.removeData.bind(this, key)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>

                <h2>已完成事项</h2>
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            if (value.checked) {
                                return (
                                    <li key={key}>
                                        <input type='checkbox' checked={value.checked} onChange={this.checkboxChange.bind(this, key)} />

                                        {value.title}

                                        -- <button onClick={this.removeData.bind(this, key)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList3;