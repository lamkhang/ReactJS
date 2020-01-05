import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import {connect} from "react-redux";
import * as action from "./../redux/action/index";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [
                {
                    id: 1,
                    name: "Dinh Phuc Nguyen",
                    username: "dpnguyen",
                    email: "dpnguyen@gmail.com",
                    phoneNumber: "1123123213",
                    type: "VIP"
                },
                {
                    id: 2,
                    name: "Nguyen Dinh Phuc",
                    username: "nguyendp",
                    email: "nguyendp@gmail.com",
                    phoneNumber: "1123123213",
                    type: "VIP"
                }
            ],
            userEdit: null,
            keyWord: ""
        };
    }

    render() {
        let { userList } = this.state;
        userList = userList.filter(item => {

            return item.name.toLowerCase().indexOf(this.state.keyWord.toLowerCase()) !== -1;
        })

        return (
            <div className="container">
                <h1 className="display-4 text-center my-3">User Management Redux</h1>
                <div className="d-flex justify-content-between align-items-center">
                    <Search onFilter={this.handleOnFilter}/>
                    <button
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target="#modelIdUserRedux"
                        onClick={() => {
                            this.props.onEdit()
                        }}
                    >
                        Add User
          </button>
                </div>
                <Users/>
                <Modal userEdit={this.state.userEdit} />
            </div>
        );
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onEdit: () =>{
            /*
            let action ={
                type: "EDIT USER",
                user: null
            }
            */
            dispatch(action.actionEditUser(null));
        }
    }
}

export default connect(null, mapDispatchToProps) (Home);
