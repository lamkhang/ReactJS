import React, { Component } from 'react';
import Child from "./child";
import Pure from "./pure";
class LifeCycle extends Component {
    constructor(props){
        super(props);
        console.log("constructor");
        this.state = {
            username: "Nguyen"
        }
    }
    componentWillMount(){
        console.log("componentWillMount");

    }
    // componentDidMount chỉ chạy 1 lần duy nhất khi mới load trang
    componentDidMount(){
        console.log("componentDidMount");

    }
    componentDidUpdate(){
        console.log("componentDidUpdate");

    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps);
        console.log(nextState);
        if(nextState.username === "Phuc Nguyen")
            return true;

    }
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps");

    }
    render() {
        console.log("render");
        return (
            <div>
                Life Cycle
                <button className="btn btn-success" onClick={() => {this.setState({
                    username: "Phuc Nguyen"
                })}}>Set state</button>
                <h3>user name: {this.state.username}</h3>
                <Child username={this.state.username}/>
                <Pure />
            </div>
        );
    }
}

export default LifeCycle;