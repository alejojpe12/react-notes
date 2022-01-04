import React from 'react'  
import { Switch, Route, Redirect } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'

export const AuthRouter = () => {
    return (
        <div className="auth__main">
                
                <Switch>
                    <Route 
                        exact
                        path="/react-notes/auth/login"
                        component={ LoginScreen }
                    />

                    <Route 
                        exact
                        path="/react-notes/auth/register"
                        component={ RegisterScreen }
                    />

                    <Redirect to='/react-notes/auth/login'/>

                </Switch>



        </div>
    )
}
