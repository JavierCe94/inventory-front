import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginParameters from './login/loginParameters';
import Admin from './admin/admin';
import User from './user/user';
import RequestsUser from './user/requestsUser';


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
                    <Route path='/requests-user' component={RequestsUser} />
                </Switch>
            </div>
        )
    }
}

export default Main