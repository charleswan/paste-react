import React, { Component } from "react";

import '../assets/css/index.css'

class Home extends Component {
  constructor(props) {
    super(props); /* 用于父子组件传值，固定写法 */

    this.state = {
      name: "Jurnee",
      slogon: "I love Jurnee",
      age: 26,
      userinfo: {
        hobby: "eat",
        color: 'red'
      },
      style: {
        color: 'red',
        fontSize: '40px'
      }
    };

    this.getHobby = this.getHobby.bind(this)
  }

  run() {
    alert('I am run.')
  }

  getData() {
    alert(this.state.slogon)
  }

  getHobby() {
    alert(this.state.userinfo.hobby)
  }

  getName = () => {
    alert(this.state.name)
  }

  setHobby = (str, str2) => {
    this.setState({
      name: str2,
      userinfo: {
        hobby: str
      }
    })
  }

  run2 = (event) => {
    // console.log(event)
    // alert(event.target);
    event.target.style.background = 'red';
    alert(event.target.getAttribute('aid'))
  }

  inputChange=(e)=>{
    // console.log("111");
    // console.log(e.target.value)
    this.setState({
      name:e.target.value
    })
  }

  getInput=()=>{
    alert(this.state.name)
  }

  render() {
    return (
      <div>
        <h2>react 组件里面的所有节点要被根节点包含。(From Home)</h2>

        <p>{this.state.slogon}(From Home)</p>
        <h2>{this.state.name}</h2>

        <div title='111'>我是一个1 div</div>

        <br />

        {/* 数据绑定 class => className, for => htmlFor */}

        <div title={this.state.userinfo.hobby}>我是一个2 div</div>
        <div id='box' className='red'>我是红色1 div</div>
        <div className={this.state.userinfo.color}>我是红色2 div</div>

        <br />

        <label htmlFor='name'>姓名</label>
        <input id='name' />

        <br />

        <div style={{ color: 'red' }}>我是一个红色1的 div 的行内样式</div>
        <div style={this.state.style}>我是一个红色2的 div 的行内样式</div>

        <br />

        <button onClick={this.run}>OnRun</button>

        <br />

        <button onClick={this.getData.bind(this)}>getData1</button>
        <button onClick={this.getHobby}>getHobby</button>
        <button onClick={this.getName}>getName</button>

        <br />

        <button onClick={this.setHobby.bind(this, 'bag', "Mee")}>setHobby</button>

        <br />

        <button aid='123' onClick={this.run2}>事件对象</button>
        
        <br />

        <h2>表单事件</h2>

        <input onChange={this.inputChange}/><button onClick={this.getInput}>获取 input 的值</button>


      </div>
    )
  }
}

export default Home;
