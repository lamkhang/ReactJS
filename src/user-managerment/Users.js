import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
    renderHTML = () => {
        return this.props.userList.map((item, index) => {
            return <UserItem key={index} users={item}
             userEdit={this.props.userEdit}/>
        })
    }
    render() {

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderHTML()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Users;
