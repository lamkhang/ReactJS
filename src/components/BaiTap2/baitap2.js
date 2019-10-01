import React, {Component} from "react";
import Header from "../BaiTap2/header";
import Carousel from "../BaiTap2/carousel";
import WhatWeDo from "../BaiTap2/whatWeDo";
import Contact from "../BaiTap2/contact";
import ListCard from "../BaiTap2/listcard";
import Footer from "./../BaiTap2/footer";
// statefull is class
export class BaiTap2 extends Component{
    render(){
        return (
            <div>
                <Header />
                <Carousel />
                <div className="container">
                    <div className="row">
                        <WhatWeDo />
                        <Contact />
                    </div>
                    <ListCard />
                </div>
                <Footer/>
            </div>
        )
    }
}