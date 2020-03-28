import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, Transition,  } from 'react-transition-group';

import { play, exit } from './lib/animation';

import Logon from './pages/Logon';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <div className="app">
                <Route render={({ location }) => { 
                    const { pathname, key } = location;
                    
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
                                    <Route path="/" exact component={Profile}/>
                                    <Route path="/login" component={Logon}/>
                                    <Route path="/signup" component={SignUp}/>
                                    <Route path="/profile" component={Profile}/>
                                    <Route path="/incident/new" component={NewIncident}/>
                                </Switch>
                            </Transition>
                        </TransitionGroup>
                    )}
                }/>
            </div>
        </BrowserRouter>
    )
}