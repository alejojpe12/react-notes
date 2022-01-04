import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../components/journal/JournalScreen'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


import React, { useEffect, useState } from 'react'
import { firebase} from '../firebase/firebase-config'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom'

import { LoadingScreen } from '../components/journal/LoadingScreen'
import { startLoadingNotes } from '../actions/notes'


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    useEffect(()=>{
        
    firebase.auth().onAuthStateChanged( async (user) => {
        
        if(user?.uid) {
            dispatch( login(user.uid, user.displayName, user.photoURL) )
            setIsLoggedIn( true );
            dispatch(startLoadingNotes(user.uid));



        } else {
            setIsLoggedIn( false );
        }


            setChecking(false);

    });
    
    }, [dispatch, setChecking, setIsLoggedIn])
    
    if(checking) {
        return(
            <LoadingScreen />
        )
    }
    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/react-notes/auth"
                        component={ AuthRouter }
                        isAuthenticated={isLoggedIn}
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={isLoggedIn}
                        path="/react-notes"
                        component={ JournalScreen }
                        
                    />

                <Redirect to='/react-notes/auth/login'/>

                </Switch>
            </div>
        </Router>
    )
}
