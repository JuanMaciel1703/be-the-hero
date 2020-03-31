import React, { useContext } from 'react';
import { Route, useHistory } from 'react-router-dom';
import AppContext from './contexts/AppContext';

export default function PrivateRoute(props) {
    const context = useContext(AppContext);
    const history = useHistory();

    if (context.user)
        return <Route path={props.path} component={props.component} {...props}/>
    
    window.location = '/login';
}