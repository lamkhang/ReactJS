import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
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
    timVitri = (id) => {
        return this.state.userList.findIndex(item => {
            return item.id === id
        })
    }
    // handleDelete = (id) => {
    //     let index = this.timVitri(id);
    //     let userList = [...this.state.userList]
    //     if (index !== -1) {
    //         userList.splice(index, 1);
    //     }
    //     this.setState({
    //         userList
    //     })
    // }
    handleOnSubmit = (user) => {
        // let user1 = { ...user };
        if(user.id === ""){
            // Add
            user.id = Math.random();
            let userList = [...this.state.userList, user]; //copy thanh mang moi
            this.setState({
                userList
            })
        }
        else{
            // Edit
            let index = this.timVitri(user.id);
            let userList = [...this.state.userList];
            if(index !== -1){
                userList[index] = user;
            }
            this.setState({
                userList,
                userEdit: user
            })
        }

    }
    handleUserEdit = (user) => {
        this.setState({
            userEdit: user
        })
    }
    handleOnFilter = (keyWord)=>{
        this.setState({
            keyWord
        })

    }
    render() {
        let { userList } = this.state;
        userList = userList.filter(item => {
            return item.name.toLowerCase().indexOf(this.state.keyWord.toLowerCase()) !== -1;
        })

        return (
            <div className="container">
                <h1 className="display-4 text-center my-3">User Management</h1>
                <div className="d-flex justify-content-between align-items-center">
                    <Search onFilter={this.handleOnFilter}/>
                    <button
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target="#modelIdUser"
                        onClick={() => {
                            this.setState({
                                userEdit: null
                            })
                        }}
                    >
                        Add User
          </button>
                </div>
                <Users userList={userList} userEdit={this.handleUserEdit} />
                <Modal onSubmit={this.handleOnSubmit} userEdit={this.state.userEdit} />
            </div>
        );
    }
}

export default Home;
