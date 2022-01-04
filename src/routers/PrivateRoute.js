import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
// import {
//     TransitionGroup,
//     CSSTransition
//   } from "react-transition-group";

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    
    localStorage.setItem('lastPath', rest.location.pathname);
    // let location = useLocation

    return (


        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/react-notes/auth/login" /> )
            )}
        
        />


    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
