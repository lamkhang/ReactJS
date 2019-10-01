import React from "react";
import Header from "./header";
import SideBar from "./sidebar";
import Content from "./content";
import Footer from "./footer";
// stateless is function
function BaiTap1(){
    return (
        <div>
            <Header />
            <div className="contents">
                <SideBar />
                <Content />
            </div>

            <Footer />
        </div>
        );

}
export default BaiTap1;