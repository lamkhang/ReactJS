import React, {Component} from "react";
import {Navbar} from "./navbar";
import Carousel from "./carousel";
import ListSmartPhone from "./listsmartphone";
import Promotion from "./promotion";
import ListLaptop from "./listlaptop";
export default class BaiTap3 extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar />
                <Carousel />
                <ListSmartPhone />
                <ListLaptop />
                <Promotion />
            </div>
        )
    }
}
