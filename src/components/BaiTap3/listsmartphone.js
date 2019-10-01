import React, { Component } from "react";
import ItemSmartPhone from "./itemsmartphone";
export default class ListSmartPhone extends Component {
    render() {
        return (
            <section id="smartphone" className="container-fluid pt-5 pb-5">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    <ItemSmartPhone />
                    <ItemSmartPhone />
                    <ItemSmartPhone />
                    <ItemSmartPhone />
                </div>
            </section>
        );
    }
}
