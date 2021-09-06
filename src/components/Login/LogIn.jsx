import React from 'react'
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { loginUser } from '../../redux/authReducer'
import { Input } from '../../Validate/FormsControl'
import { required } from '../../Validate/validator'


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

    if(props.isAuth) {
        return <Redirect to='/profile'/>
    }      

    return (
        <div>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>

                        <div>
                            <label>Email</label>
                            <Field placeholder={"Email"} name={"email"} component={Input} validate={required} />
                        </div>

                        <div>
                            <label>Password</label>
                            <Field placeholder={"Password"} name={"password"} type={'password'} component={Input} validate={required} />
                        </div>

                        <div>
                            <label>remember me</label>
                            <Field component={Input} name={"rememberMe"} type={"checkbox"} />
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
        isAuth: state.authPage.isAuth
    }
}

const LoginFormContainer = connect(mapStateToProps, { loginUser })(LoginForm);

export default Login