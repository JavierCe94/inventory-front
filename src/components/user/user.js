import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ""
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <h2>Gestion prendas trabajador</h2>
                <p>Selecccione <strong>Solicitudes</strong> en el menú superior para acceder a la gestion de vestuario. Puede solicitar prendas y ver estado de las solicitudes</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

export default connect(mapStateToProps)(User);