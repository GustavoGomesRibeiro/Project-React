import React from 'react'
import {isAuthenticated} from '../service/authService';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../view/session/login';
import Register from '../view/session/register';


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render = {props => isAuthenticated() ? (<Component {...props}/>) 
        : (<Redirect to= {{pathname: '/', state: { from: props.location } }}/>)
        }
    />
    );


const Routes = () => (
    <BrowserRouter>
    <Switch>
        {/* obrigado ter path, exatc{true} component{export here} */}
        <Route exact path='/' component={Login}/>
        <Route path='/register' component={Register}/>
        <PrivateRoute path='/App' component={() => <h1></h1>}/>
        <Route path='*' component={() => <h1>page not Found 404</h1>}/>
    </Switch>
</BrowserRouter>
);


export default Routes;