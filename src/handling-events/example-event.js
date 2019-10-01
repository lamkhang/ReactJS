import React, {Component} from "react";
import log from "loglevel";
export default class ExampleEvent extends Component{
    username = "khang";
    isLogin = false;
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
        return this.isLogin ?

        <div>Hello {this.username}</div> : <button className="btn btn-success" onClick={this.handlingLogin}>Login</button>
    }
    handlingLogin = () =>{
        console.log(123)

    }
    render(){
        return(
            <div>
                <h3>Example Events</h3>
                {this.renderHTML()}
            </div>
        )
    }
}