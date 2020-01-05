import React, { Component } from 'react';

class Child extends Component {
    componentDidMount(){
        console.log("componentDidMount Child");
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);

        console.log("componentWillReceiveProps Child");
    }
    render() {
        console.log("render Child");

        return (
            <div >
                {this.props.username}
            </div>
        );
    }
}

export default Child;