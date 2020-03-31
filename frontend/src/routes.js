import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, Transition,  } from 'react-transition-group';
import PrivateRoute from './PrivateRoute';
import { play, exit } from './lib/animation';

import Logon from './pages/Logon';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import AppContext from './contexts/AppContext';

export default function Routes() {
    const context = useContext(AppContext);

    return (
        <BrowserRouter>
            <div className="app">
                <Route render={({ location }) => { 
                    const { key } = location;
                    let { pathname } = location;

                    if (pathname === '/logout') {
                        localStorage.removeItem('@be-the-hero/user');
                        context.user = null;
                    }

                    return (
                        <TransitionGroup component={null}>
                            <Transition
                                key={key}
                                appear={true}
                                onEnter={(node, appears) => play(pathname, node, appears)}
                                onExit={(node, appears) => exit(node, appears)}
                                timeout={{ enter: 750, exit: 0 }}
                            >
                                <Switch location={location}>
                                    <Route path="/" exact component={ context.user ? Profile : Logon }/>
                                    <Route path="/login" component={ context.user ? Profile : Logon }/>
                                    <Route path="/logout" component={ Logon }/>
                                    <Route path="/signup" component={ context.user ? Profile : SignUp}/>
                                    <PrivateRoute path="/profile" component={Profile}/>
                                    <PrivateRoute path="/incident/new" component={NewIncident}/>
                                </Switch>
                            </Transition>
                        </TransitionGroup>
                    )}
                }/>
            </div>
        </BrowserRouter>
    )
}