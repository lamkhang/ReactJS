import React, { Component } from "react";
export default class BaiTapCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "./img/imgRedCar.jpg"
        }
    }
    selectCar = colorCar => {
        let img = "";
        switch (colorCar) {
            case "red":
                img= "./img/imgRedCar.jpg"
                break;
            case "silver":
                img= "./img/imgSilverCar.jpg"
                break;
            case "black":
                img= "./img/imgBlackCar.jpg"
                break;
        }
        this.setState({
            img
        })
    }


    render() {
        const style = {
            backgroundColor: "black",
            color: "white"
        }
        return (
            <div className="container">
                <h3>Bài Tập Car</h3>
                <div className="row">
                    <div className="col-sm-5">
                        <img src={this.state.img} className="img-fluid"  alt="xxx"/>
                    </div>
                    <div className="col-sm-7">
                        <button className="btn mr-2"
                            style={{ ...style, backgroundColor: "red" }} onClick={() => { this.selectCar("red") }}>
                            red
                    </button>

                        <button className="btn mr-2"
                            style={{...style,  backgroundColor: "silver"}} onClick={() => { this.selectCar("silver") }}>
                            silver
                    </button>

                        <button className="btn mr-2"
                            style={style} onClick={() => { this.selectCar("black") }}>
                            black
                    </button>
                    </div>

                </div>
            </div>
        )

    }
}