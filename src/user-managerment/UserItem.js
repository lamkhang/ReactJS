import React, { Component } from "react";

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
                        data-target="#modelIdUser"
                        onClick={() => {this.props.userEdit(users)}}
                    >
                        Edit
          </button>
                    <button className="btn btn-danger" onClick={() => {this.props.onDelete(users.id)}}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default UserItem;
