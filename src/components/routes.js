import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginParameters from './login/loginParameters';
import Admin from './admin/admin';
import User from './user/user';
import Menu from './menu/menu';

class Routes extends Component {

    render() {
        return (
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
export default Routes;