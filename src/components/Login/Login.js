import { Form, FloatingLabel } from 'react-bootstrap';
import loginInputText from '../../DAL/loginInputText';
import { validate } from '../../common/validations';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import formInputData from '../../DAL/formInputData';
import { useState } from 'react'
import "./Login.css";

function Login() {

    const validationsToCheck = ["email", "password"]
    const [loginForm, setLoginForm] = useState(formInputData)

    function validateInput({ target: { name, value } }) {
        const targetKey = formInputData[name]
        targetKey.errors = validate(name, value, formInputData[name].validations)
        targetKey.value = value
        setLoginForm({ ...loginForm })
    }

    function submitValidations(e) {
        e.preventDefault()
        for (const input in formInputData) {
            if (validationsToCheck.includes(input)) {
                validateInput({ target: { name: input, value: formInputData[input].value } })
                //sending a new object with the right parameters (validate input gets an object)
            }
        }
    }

    return (

        <div className='mainLoginDiv'>
            <div className="loginHeader">
                <h2 className='loginH'>Login</h2>
            </div>
            <div className='loginForm'>
                {
                    loginInputText.map(({ name, controlId, label, className, inputClassName, type, placeholder }, index) =>
                        <FloatingLabel
                            key={index}
                            controlId={controlId}
                            label={label}
                            className={className}>
                            <Form.Control
                                className={inputClassName}
                                type={type}
                                placeholder={placeholder}
                                onBlur={validateInput}
                                name={name} />
                            <ErrorMessage errors={formInputData[name].errors}></ErrorMessage>
                        </FloatingLabel>
                    )
                }
                <a className="forgotPassword" href="d">Forgot Your Password?</a>
                <footer className="loginFooter">
                    <button className="loginBtn" onClick={submitValidations}>LOGIN</button>
                    <a className="signUpLink" href="111">Don't Have An Account? Sign Up!</a>
                </footer>
            </div>
        </div>
    )
}

export default Login