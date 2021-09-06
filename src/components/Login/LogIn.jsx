import { Form, Field } from 'react-final-form'
import { Input } from '../../Validate/FormsControl'
import { required } from '../../Validate/validator'


const Login = () => {
    return <div>
        <h1>Login</h1>
        <LoginForm />
    </div>
}


 const LoginForm = () => {
    const onSubmit = (e) => {
       console.log("hey")
    }

    const validate = (e) => {
        console.log("hey")
    }
    
    return (
        <div>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>

                        <div>
                            <label>Login</label>
                            <Field placeholder={"Login"} name={"login"} component={Input}  validate={required}/>
                        </div>

                        <div>
                            <label>Password</label>
                            <Field placeholder={"Password"} name={"password"} component={Input}  validate={required}/>
                        </div>

                        <div>
                            <label>remember me</label>
                            <Field component={Input} name={"rememberMe"} type={"checkbox"}  validate={required}/>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                )
                } />
        </div>

    )
} 

export default Login 