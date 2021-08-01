import React, {Component} from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "Jurnee"
         };
    }

    inputChange=(e)=>{
        this.setState({
            name: e.target.value
        })
    }

    setUserName=()=>{
        this.setState({
            name: 'Mee'
        })
    }

    render() {
        return (
            <div>
                <h2>双休数据绑定: model 改变影响 View, view 改变反过来影响 model</h2>
                <input value={this.state.name} onChange={this.inputChange}/>

                <p>{this.state.name}</p>
                <button onClick={this.setUserName}>改变 name</button>
            </div>
        );
    }
}

export default TodoList;