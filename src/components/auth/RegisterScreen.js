import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);

    console.log(msgError);

    const [formValues, handleInputChange] = useForm(
        {
            name: '',
            email: '',
            password: '',
            password2: ''
        }
    )

    const {name, email, password, password2} = formValues

    const handleRegister = (e) => {
        e.preventDefault()

        if (isFormValue()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    const isFormValue= () => {

        if(name.trim().length === 0) {
            dispatch(setError('Name is required'))
            return false
        }else if(!validator.isEmail(email)) {
            dispatch(setError('Email is required'))
            return false
        }else if(password !== password2 || password.length < 5) {
            dispatch(setError('Password should be at least 6 characters and match each other'))
            return false 
        }
        dispatch(removeError())
        return true
    }

    
    return (

            <div id="auth-container" className= {`auth__box-container animate__animated animate__flipInX`}>

            <h3 className="auth__title">Register</h3>
            <form
                onSubmit={handleRegister}
            >
                {
                    msgError&&(
                        <div className="auth__alert-error">
                            {msgError}
                        </div>)
                }
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}

                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}

                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}

                />

                <button
                    type="Submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>
                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already register?
                </Link>
            </form>
                        </div>
    )
}
