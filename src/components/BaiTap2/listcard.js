import React, {Component} from "react";
import ItemCard from "./itemcard";
export default class ListCard extends Component{
    render(){
        return (
        <div className="row">
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>
            )
    }

}