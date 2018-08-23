import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Cookies from "js-cookie";
import { withRouter } from 'react-router-dom';
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
                                &nbsp;</a><a href="/home">Gestion de inventario</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        {
                            (this.props.visibleMenu === 'MENU_ADMIN') &&
                            <Nav className="container-fluid navLogin">
                                <NavItem>
                                    Prendas
                                </NavItem>
                                <NavItem>
                                    Tallas
                                </NavItem>
                                <NavItem>
                                    Solicitudes
                                </NavItem>
                            </Nav>
                        }
                        {
                            (this.props.visibleMenu === 'MENU_USER') &&
                            <Nav className="container-fluid navLogin">
                                <NavItem onClick={() => this.props.history.push('/login')}>
                                    Solicitudes
                                </NavItem>
                            </Nav>
                        }
                        <Nav pullRight className="container-fluid navLogin">
                            {
                                (this.props.visibleMenu === 'MENU_USER' ||
                                    this.props.visibleMenu === 'MENU_ADMIN') ?
                                    (
                                        <Nav className="container-fluid">
                                            <NavItem onClick={this.logOut}>
                                                <span>&nbsp;</span>
                                                <span className="glyphicon glyphicon-log-out"></span>
                                                &nbsp;Logout
                                            </NavItem>
                                        </Nav>
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
        visibleMenu: state.vMenu
    }
}

export default withRouter(connect(mapStateToProps)(Menu))