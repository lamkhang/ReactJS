import React, {Component} from "react";
export default class ListKeys extends Component{
    mangSP = [
        {maSP: 1, tenSP: "IPhone", gia:100},
        {maSP: 2, tenSP: "SamSung", gia:200},
        {maSP: 3, tenSP: "HTC", gia:300}
    ];
    renderTable = () => {
        return this.mangSP.map((item, index) =>{
            return(
                <tr key={index}>
                    <td>{item.maSP}</td>
                    <td>{item.tenSP}</td>
                    <td>{item.gia}</td>
                </tr>
            )
        })
    }
    render(){
        return(
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>maSP</th>
                        <th>tenSP</th>
                        <th>gia</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>

                </table>
            </div>

        )
    }
}