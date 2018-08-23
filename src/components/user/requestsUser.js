import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormBuilder from './../form/formBuilder';

const garments =
    [
        {
            tx: "select", key: "garments", phrase: "Selecciona una prenda:",
            options:
                ["Chaqueta", "Camiseta", "Pantalón", "Zapatos"]
        }
    ]
;

const garmentSizes =
    [
        {
            tx: "select", key: "garmentSizes", phrase: "Selecciona una talla:",
            options:
                ["S", "M", "L", "XL"]
        }
    ]
;

const shoeSizes =
    [
        {
            tx: "select", key: "shoeSizes", phrase: "Selecciona una talla:",
            options:
                ["40", "41", "42", "43"]
        }
    ]
;

class RequestsUser extends Component {
    constructor(props) {
        super(props);
        this.token = this.props.token;
    }

    render() {
        return (
            <div className="container-fluid">
                <FormBuilder url={"url"} parameters={garments} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

export default connect(mapStateToProps)(RequestsUser);