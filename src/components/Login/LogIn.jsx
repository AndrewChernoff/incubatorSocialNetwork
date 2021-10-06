import React from 'react'
import { Form } from 'react-final-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { loginUser } from '../../redux/authReducer'
import { Input, createForm } from '../../Validate/FormsControl'
import { required } from '../../Validate/validator'
import s from '../Login/Login.module.css'

const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginFormContainer />
    </div>
}


const LoginForm = (props) => {
    const onSubmit = (e) => {
        debugger
        props.loginUser(e.email, e.password, e.rememberMe, e.captcha);
    }

    if (props.isAuth) {
        return <Redirect to='/profile' />
    }

    return (
        <div>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            {createForm('Email', "Email", "email", Input, required, null)}
                            {createForm('Password', "Password", "password", Input, required, 'password')}
                            {createForm('Remember me', null, "rememberMe", Input, null, "checkbox")}
                        </div>

                        <div>
                            {props.wrongAuth ? <div className={s.errorLogin}> Incorect email or password </div> : undefined}
                        </div>


                        {props.captcha && <div style={{ padding: 20 }}>
                            <img src={props.captcha} style={{ maxWidth: 250 }} alt='captcha' />
                            {createForm(null, 'Symbols for login', "captcha", Input, null, "text")}
                        </div>}

                        <div >
                            <button>Login</button>
                        </div>
                    </form>
                )
                } />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authPage.isAuth,
        wrongAuth: state.authPage.wrongAuth,
        captcha: state.authPage.captcha
    }
}

const LoginFormContainer = connect(mapStateToProps, { loginUser })(LoginForm);

export default Login