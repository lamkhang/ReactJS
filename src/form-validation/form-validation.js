import React, { Component } from "react";

export default class Formvalidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        username: "",
        password: "",
        email: ""
      },
      error:{
        username: "",
        password: "",
        email: ""
      },
      formValid: false,
      userNameValid: false,
      passwordValid: false,
      emailValid: false
    }
  }
  handleSubmit = event => {
    event.preventDefault();
  }
  handleOnChange = event =>{
    // let target = event.target;
    // let name = target.name;
    // let value = target.value;
    let {name, value} = event.target;
    this.setState({
      value:{...this.state.value, [name]: value}
    })
  }
  // handleOk(){
  //   console.log("ok");
  // }
  handleError = event =>{
    let {name, value} = event.target;
    let message = value === "" ? name + " khong duoc rong" : "";
    let {userNameValid, passwordValid, emailValid} = this.state;
    switch (name) {
      case "username":
        userNameValid = message !== "" ? false : true;
        console.log(value.length);

        if( value !== "" && value.length < 4){
          message = 'Vui long nhap lon hon 4 ki tu';
          console.log(message);
          userNameValid = false;
        }
        break;
      case "password":
        passwordValid = message !== "" ? false : true;
        break
      case "email":
        emailValid = message !== "" ? false: true;
        if(value !== "" && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
          message = "email khong hop le";
          emailValid = false;
        };
        break
      default:
        break;
    }
    console.log(userNameValid, passwordValid, emailValid);
    this.setState({
      error:{
        ...this.state.error, [name]: message,
      },
        userNameValid,
        passwordValid,
        emailValid

    },() => console.log(this.state.error))
  }
  formValidation = ()=>{


    this.setState({
      formValid : this.state.userNameValid && this.state.passwordValid && this.state.emailValid
    })

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <h3>Form Validation</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor>Username</label>
                <input type="text" className="form-control" name="username" onChange={this.handleOnChange} onBlur={this.handleError} onKeyUp={this.handleError}/>
                {console.log(this.state.error.username !== "")}
                {this.state.error.username !== "" ? <div className="alert alert-danger">{this.state.error.username}</div>: ""}
              </div>
              <div className="form-group">
                <label htmlFor>Password</label>
                <input type="text" className="form-control" name="password" onChange={this.handleOnChange} onBlur={this.handleError} onKeyUp={this.handleError}
                 />
                 {this.state.error.password !== "" ? <div className="alert alert-danger">{this.state.error.password}</div>: ""}
              </div>
              <div className="form-group">
                <label htmlFor>Email</label>
                <input type="email" className="form-control" name="email" onChange={this.handleOnChange} onBlur={this.handleError} onKeyUp={this.handleError}/>
                {this.state.error.email !== "" ? <div className="alert alert-danger">{this.state.error.email}</div>: ""}
              </div>
              <button type="submit" className="btn btn-success" disabled={!this.state.formValid}>
                Submit
              </button>
            </form>

            {/* <button type="submit" className="btn btn-primary mt5" onClick={this.handleOk}>
                ook
              </button> */}
          </div>
        </div>
      </div>
    );
  }
}