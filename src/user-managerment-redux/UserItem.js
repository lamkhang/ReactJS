import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../redux/action/index";
class UserItem extends Component {

    render() {
        let { users } = this.props
        return (
            <tr>
                <td>{users.name}</td>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>{users.phoneNumber}</td>
                <td>{users.type}</td>
                <td>
                    <button
                        className="btn btn-info mr-2"
                        data-toggle="modal"
                        data-target="#modelIdUserRedux"
                        onClick={() => {this.props.editUser(users)}}
                    >
                        Edit
          </button>
                    <button className="btn btn-danger" onClick={() => {this.props.onDelete(users.id)}}>Delete</button>
                </td>
            </tr>
        );
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        // value cua props là 1 hàm
        onDelete: id =>{
            /*
            let action = {
                type: "DELETE USER",
                id
            }
            */
            dispatch(action.actionOnDelete(id));
        },
        editUser: user=>{
            /*
            let action ={
                type: "EDIT USER",
                user
            }
            */
            dispatch(action.actionEditUser(user));
        }
    }
}
export default connect(
    null, // tham so mapStateToProps
    mapDispatchToProps)
    (UserItem);
