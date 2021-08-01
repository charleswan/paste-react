import React from "react";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Jurnee'
        };

        this.TheInput = null;
        this.setTheInputRef = element => {
            this.TheInput = element;
        };
    }

    inputChange = () => {
        if (this.TheInput) {
            this.setState({
                name: this.TheInput.value
            })
        }
    }

    getInput = () => {
        alert(this.state.name)
    }

    inputKeyUp = (e) => {
        // console.log(e.keyCode);
        if (e.keyCode === 13) {
            alert(e.target.value)
        }
    }

    inputKeyDown = (e) => {
        // console.log(e.keyCode);
        if (e.keyCode === 13) {
            alert(e.target.value)
        }
    }

    render() {
        return (
            <div>
                {/* 不用事件，使用 ref 来获取dom节点, using callback-refs: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs */}
                <input ref={this.setTheInputRef} onChange={this.inputChange} /><button onClick={this.getInput}>获取 input 的值</button>
                <br /><br /><br />
                <input onKeyUp={this.inputKeyUp}/>
                <br />
                <input onKeyDown={this.inputKeyDown}/>
            </div>
        );
    }
}

export default List;