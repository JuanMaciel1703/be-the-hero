import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, Transition,  } from 'react-transition-group';

import { play, exit } from './lib/animation';

import Logon from './pages/Logon';
import SignUp from './pages/SignUp';

export default function Routes() {
    return (
        <BrowserRouter>
            <div className="app">
                <Route render={({ location }) => { 
                    const { pathname, key } = location;
                    
                    console.info(key)

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
                                    <Route path="/" exact component={Logon}/>
                                    <Route path="/login" component={Logon}/>
                                    <Route path="/signup" component={SignUp}/>
                                </Switch>
                            </Transition>
                        </TransitionGroup>
                    )}
                }/>
            </div>
        </BrowserRouter>
    )
}