import React, {Component} from "react";
export default class HandlingEvents extends Component{
    handlingEvents = () =>{
        console.log(1234);
    }
    handlingEventsParam = name =>{
        console.log(name);
    }
    render(){
        return(
            <div>
                <h3>Handling Events</h3>
                <button className="btn btn-success" onClick={this.handlingEvents}>Handling Events </button>
                <button className="btn btn-info" onClick={() => {this.handlingEventsParam("khang")}}>Handling Events Params</button>
            </div>
        )
    }

}