import React, { Component } from 'react';
import Menu from './../menu/menu';
import Main from '../main';
import Cookies from "js-cookie";
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setToken } from './../actions/actions';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ""
        }
        // this.onLoginIn = this.onLoginIn.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Pagina Admin</h1>
                <Button onClick={() => this.setState({token: this.props.token})}>Mostrar token</Button>
                <p>token: {this.state.token}</p>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

export default connect(mapStateToProps)(Admin);