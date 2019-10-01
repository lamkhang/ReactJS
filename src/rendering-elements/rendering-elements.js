import React, {Component} from "react";
export default class RenderingElements extends Component{
    name = "Cybersoft";
    username = "khang.lam";
    lop = "fe28";
    renderInfo = () =>{
        return (
            <div>
                Họ tên: {this.username}
                -Lớp: {this.lop}
            </div>
        )
    }
    render(){
        return(
            <div>
                <h3>RenderingElements</h3>
                <div>{this.renderInfo()}</div>
                <div>{this.name}</div>
                <div>{this.username}</div>
                <div>{this.lop}</div>
            </div>
        );
    }
}