import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown } from "react-bootstrap";
import Cookies from "js-cookie";
import { withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import LoginParameters from './../login/loginParameters';
import Admin from './../admin/admin';
import Routes from './../routes';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { VisibleMenu, setVisibleMenu, setToken } from './../actions/actions';


class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goLogin: false,
            visibility : ""
        }
    }

    logOut = () => {
        this.props.dispatch(setVisibleMenu(VisibleMenu.MENU_UNLOGGED));
        this.props.dispatch(setToken(""));
    }

    componentWillMount = () => {

    }

    render() {
        return (
            <div className="container-fluid">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand className="mainIndexNav">
                            <a href="/home" className="glyphicon glyphicon-home">
                                &nbsp;</a><a href="#">Gestion de inventario</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight className="container-fluid navLogin">
                            {
                                (this.props.visibleMenu === 'MENU_USER' ||
                                 this.props.visibleMenu === 'MENU_ADMIN') ?
                                    (
                                            <NavItem onClick={this.logOut}>
                                                <span>&nbsp;</span>
                                                <span className="glyphicon glyphicon-log-out"></span>
                                                &nbsp;Logout
                                            </NavItem>
                                    ) :
                                    (
                                        <Nav className="container-fluid">
                                            <NavItem>
                                                <span>&nbsp;</span>
                                                <span className="glyphicon glyphicon-hand-right"></span>
                                                &nbsp;Registrarse
                                            </NavItem>
                                            <NavItem onClick={() => this.props.history.push('/login')}>
                                                <span>&nbsp;</span>
                                                <span className="glyphicon glyphicon-log-in"></span>
                                                &nbsp;Login
                                            </NavItem>
                                        </Nav>
                                    )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        visibleMenu: state.visibleMenu
    }
}

export default withRouter(connect(mapStateToProps)(Menu))