import React from 'react'
import { Route, Switch } from 'react-router-dom';
import LoginMain from './LoginMain';
import UserMenu from './UserMenu';
import App from './App';
const AppTest = () => {
    return (
        <>
            <Switch>
                <Route path='/App' component={App} />
                <Route path='/LoginMain' component={LoginMain} />
                <Route path='/UserMenu' component={UserMenu} />
            </Switch>
        </>
    )
}

export default AppTest;
