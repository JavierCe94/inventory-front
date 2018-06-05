import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './login/login';
import LoginParameters from './login/loginParameters';
import Menu from './menu/menu';
import Admin from './admin/admin';
import Routes from './routes';
import User from './user/user';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleLogin :true,
        }
    }

    render() {

        return(
            <div>
                <Switch>
                    <Route path='/login' component={LoginParameters} />
                    <Route path='/admin' component={Admin} />
                    <Route path='/user' component={User} />
                </Switch>
            </div>
        )
    }
}

export default Main