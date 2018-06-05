import React, { Component } from "react";
import { Panel, FormControl, FormGroup, Fade, Nav, Navbar, NavItem, NavDropdown, MenuItem, ListGroup, ListGroupItem } from "react-bootstrap";
import FormBuilder from "./../form/formBuilder";
import Login from "./login";

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibleLogin: true,
            visibleOutput: false
        }
        this.arrayParametersLogin = this.props.arrayParametersLogin;
        this.output = "";
    }

    loginCallback = (data, user, userId, role) => {
        if (200 === data) {
            this.output = "Login satisfactorio";
            this.setState({ visibleLogin: true });
        }
    }

    render() {
        return (
            <div>
                {this.state.visibleLogin && <Login arrayParametersLogin={this.arrayParametersLogin} />}
                {this.state.visibleOutput && this.output}
            </div>

        )
    }
}

export default LoginPage;
