import React, { Component } from 'react';
import { Fade, Well, FormGroup, FormControl, Button } from 'react-bootstrap';
import Cookies from "js-cookie";
import { connect } from 'react-redux';
import { setToken } from './../actions/actions';


/* ------ Formulario parametrizado ----------- */

const wellStyle = {
    background: 'lavender'
}

class FormBuilder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            output: '',
            outputbool: false,
            send: true,
            tokenReceived: false,
            done: false
        }

        this.role = this.props.role;
        this.setRole(this.role);
        this.parametersInput = this.props.parameters;
        this.url = this.props.url;
        this.formControls = this.createFormControls(this.parametersInput);
        this.status = '';
        this.returnValue = '';
        this.arr = {};
    }

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        this.role = nextProps.role;
        this.setRole(this.role);
        this.parametersInput = nextProps.parameters;
        this.url = nextProps.url;
        this.formControls = this.createFormControls(this.parametersInput);
    }

    createFormControls = (parametersInput) => {
        let arrayFormControl = parametersInput.map((param, i) =>
            <FormControl className="formFile" key={i} type={param.tx} name={param.key} placeholder={param.phrase} required/>);
        return arrayFormControl;
    }

    setRole = (role) => {
        switch (role) {
            case 0 :
                this.arr["role"] = "user";
                break;
            case 1 :
                this.arr["role"] = "admin";
                break;
        }
    }

    handleSubmit = (e) => {

        this.setState({ outputbool: false });
        e.preventDefault();

        (this.parametersInput).map((types, i) => this.arr[types.key] = e.target[types.key]["value"]);

        console.log(this.arr);

        let user = e.target[0]["value"];

        fetch(this.url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(
                {request: this.arr}
            ),
        })
            .then((response) => {
                let status = response.status;
                if (200 === status) {
                    if (this.props.token === "") {
                        this.setState({tokenReceived : true});
                    }
                    this.status = status;
                    this.role = user;
                    this.setState({ 
                        done: true,
                        send: false
                    });
                    return response.json();
                }
                return response.json();
            })
            .then((output) => {
                if (this.state.tokenReceived) {
                    this.props.dispatch(setToken(output));
                    this.setState({tokenReceived: false, output : "Login correcto"});
                } else {this.setState({ output: output.message });}
                this.setState({ outputbool: true });
            })
    }

    finish = () => {
        this.props.parentCallback(this.status, this.role, this.returnValue);
    }

    render() {
        return (
            <div className="container-fluid">
                <form className="baseForm" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        {this.formControls}
                    </FormGroup>
                    {this.state.send && <Button bsSize="large" bsStyle="success" type="submit">Enviar</Button>}
                    {this.state.done && <Button bsSize="large" bsStyle="success" onClick={this.finish}>Hecho</Button>}
                </form>
                <Fade in={this.state.outputbool}>
                    <h3>{this.state.output}{this.state.done && <span>&nbsp;<span className="glyphicon glyphicon-ok" aria-hidden="true"></span></span>}</h3>
                </Fade>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

export default connect(mapStateToProps)(FormBuilder);