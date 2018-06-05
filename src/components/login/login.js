import React, { Component } from 'react';
import { Breadcrumb, Well, Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import FormBuilder from './../form/formBuilder';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Tabs from './../form/tabs';
import Menu from './../menu/menu';
import { setVisibleMenu, VisibleMenu } from './../actions/actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
        this.role = "";

        this.formBuilderCallbackForm = this.formBuilderCallbackForm.bind(this);
    }

    componentWillMount = () => {
        this.parameters = this.props.arrayParametersLogin;
        this.role = this.parameters[this.state.index].value;
    }

    tabsCallback = (data) => {
        this.setState({ index: data });
        this.role = this.parameters[data].value;
    }

    formBuilderCallbackForm = (data, user, returnValue) => {
        if (200 === data) {
            switch (this.role) {
                case "Administrador":
                    this.props.dispatch(setVisibleMenu(VisibleMenu.MENU_ADMIN));
                    this.props.history.push('/admin');
                    break;
                case "Usuario":
                    this.props.dispatch(setVisibleMenu(VisibleMenu.MENU_USER));
                    this.props.history.push('/user');
                    break;
                default:
            }
        }
    }

    breadcrumbHomeCallback = () => {
    }

    render() {
        return (

            <div className="container-fluid">
                <Breadcrumb className="breadCrumPage">
                    <Breadcrumb.Item onClick={this.breadcrumbHomeCallback}>Inicio</Breadcrumb.Item>
                    <Breadcrumb.Item active>Login</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col md={5}>

                        <Well>
                            <h2>Introduce tu nombre de usuario y contraseña</h2>
                            <hr className="divider" />
                            <h4>Si no tienes cuenta de usuario puedes crearte una acciendo click en el botón registrar</h4>
                            <br />
                        </Well>

                    </Col>
                    <Col md={7}>
                        <Panel className="formComponent">
                            <Panel.Heading>
                                <Panel.Title className="text-center" componentClass="h3">Introduzca información</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Tabs loginCallback={this.tabsCallback} />
                                <FormBuilder parentCallback={this.formBuilderCallbackForm} url={this.parameters[this.state.index]["url"]} parameters={this.parameters[this.state.index]["inputs"]} />
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        visibleMenu: state.VisibleMenu
    }
}

export default withRouter(connect(mapStateToProps)(Login))
