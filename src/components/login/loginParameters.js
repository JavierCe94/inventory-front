import React, { Component } from 'react';
import LoginPage from './loginPage';

/* LANDING PAGE */
/* En esta clase hay varios enlaces que llaman al listado, al formulario dinámico, y al formulario tradicional */

class LoginParameters extends Component {

    render() {
        return (
            <div>
                <LoginPage arrayParametersLogin={
                    [
                        {
                            "url": "/employee/login", "value": "Usuario",
                            "inputs":
                                [
                                    { tx: "text", key: "nif", phrase: "NIF" },
                                    { tx: "password", key: "password", phrase: "Contraseña" }
                                ]
                        },
                        {
                            "url": "/admin/login", "value": "Administrador",
                            "inputs":
                                [
                                    { tx: "text", key: "username", phrase: "Nompre de usuario" },
                                    { tx: "password", key: "password", phrase: "Contraseña" }
                                ]
                        }
                    ]
                } 
                />
            </div>
        )
    }
}

export default LoginParameters;
