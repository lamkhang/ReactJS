import React, { Component } from "react";
import {connect} from "react-redux";
import * as action from "./../redux/action/index";
class Search extends Component {

    render() {
        return <input type="text" className="form-control mb-3 w-50" onChange={(event) => this.props.onFilter(event.target.value)}/>;
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onFilter: keyWord=>{
            /*
            let action = {
                type: "FILTER",
                keyWord
            }
            */
            dispatch(action.actionFilter(keyWord))
        }
    }
}
export default connect(null, mapDispatchToProps) (Search);
