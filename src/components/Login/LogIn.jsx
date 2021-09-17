import React from 'react'
import { Form, Field } from 'react-final-form'
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
        props.loginUser(e.email, e.password, e.rememberMe);
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

                        {/* <div>
                            <label>Email</label>
                            <Field placeholder={"Email"} name={"email"} component={Input} validate={required} />
                        </div>  */}
                        {/* <div>
                            <label>Password</label>
                            <Field placeholder={"Password"} name={"password"} type={'password'} component={Input} validate={required} />
                        </div>*/}

                        {createForm('Email', "Email", "email", Input, required, null)}
                        {createForm('Password', "Password", "password", Input, required, 'password')}
                        {createForm('Remember me', null, "rememberMe", Input, null, "checkbox")}





                        <div>
                            {props.wrongAuth ? <div className={s.errorLogin}> Incorect email or password </div> : undefined}
                        </div>
                        <button>Login</button>

                    </form>
                )
                } />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authPage.isAuth,
        wrongAuth: state.authPage.wrongAuth
    }
}

const LoginFormContainer = connect(mapStateToProps, { loginUser })(LoginForm);

export default Login