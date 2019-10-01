import React, {Component} from "react";
import log from "loglevel";
export default class State extends Component{

    constructor(props){
        super(props);
        this.state = {
            username : "khang",
            isLogin : false
        }
    }
    renderHTML = () =>{
        // Cach 1:
        /*
        if(this.isLogin){
            return <div>Hello {this.username}</div>;
        }
        else{
            return <button className="btn btn-success">Login</button>
        }
        */

        // Cách 2:
        return this.state.isLogin ?

        <div>Hello {this.state.username}</div> : <button className="btn btn-success" onClick={this.handlingLogin}>Login</button>
    }
    handlingLogin = () =>{
        this.setState({
            isLogin : true
        })
    }
    render(){
        return(
            <div>
                <h3>State</h3>
                {this.renderHTML()}
            </div>
        )
    }
}