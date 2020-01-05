import React, { Component } from "react";
class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            name: "",
            email: "",
            phoneNumber:"",
            type: "USER",
            id: ""
        };
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.userEdit){
            // EDIT
            this.setState({
                username: nextProps.userEdit.username,
                name: nextProps.userEdit.name,
                email: nextProps.userEdit.email,
                phoneNumber: nextProps.userEdit.phoneNumber,
                type: nextProps.userEdit.type,
                id: nextProps.userEdit.id
            })
        }
        else{
            // ADD
            this.setState({
                username: "",
                name: "",
                email: "",
                phoneNumber:"",
                type: "USER",
                id: ""
            })
        }
    }
    handleOnChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault(); // ko load lai trang khi
        this.props.onSubmit(this.state);
    }
    render() {
        return (
            <div
                className="modal fade"
                id="modelIdUser"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="modelTitleId"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.userEdit ? "Edit User" : "Add User"}</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control" name="username" onChange={this.handleOnChange} value={this.state.username}/>
                                </div>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" name="name" onChange={this.handleOnChange} value={this.state.name}/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control" name="email" onChange={this.handleOnChange} value={this.state.email}/>
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" className="form-control" name="phoneNumber" onChange={this.handleOnChange} value={this.state.phoneNumber}/>
                                </div>
                                <div className="form-group">
                                    <label>Type</label>
                                    <select className="form-control" name="type" onChange={this.handleOnChange} value={this.state.type}>
                                        <option>USER</option>
                                        <option>VIP</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-success">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default  Modal;
