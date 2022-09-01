import { Form, FloatingLabel } from 'react-bootstrap';
import signUpInputText from '../../DAL/signUpInputText';
import { validate } from '../../common/validations';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import formInputData from '../../DAL/formInputData';
import { useState } from 'react'
import "./SignUp.css";
import { Link } from 'react-router-dom';

function SignUp() {

    const validationsToCheck = ["email", "firstName", "lastName", "password"]
    const [loginForm, setLoginForm] = useState(formInputData)

    function validateInput({ target: { name, value, placeholder } }) {
        const targetKey = formInputData[name]
        targetKey.errors = validate(placeholder, value, formInputData[name].validations)
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
        <div className='mainSignUpDiv'>
            <div className="signUpHeader">
                <h2 className='signUpH'>Sign Up</h2>
            </div>
            <div className='signUpForm'>
                {
                    signUpInputText.map(({ name, label, className, type, placeholder }, index) =>
                        <FloatingLabel
                            key={index}
                            controlId={"floatingInput"}
                            label={label}
                            className={className}>
                            <Form.Control
                                className={"floatingText"}
                                type={type}
                                placeholder={placeholder}
                                onBlur={validateInput}
                                name={name} />
                            <ErrorMessage errors={formInputData[name].errors}></ErrorMessage>
                        </FloatingLabel>
                    )
                }
                <footer className="signUpFooter">
                    <button className="signUpBtn" onClick={submitValidations}>SIGN UP</button>
                    <Link className="loginLink" to="/login">Already Have An Account? Login!</Link>
                </footer>
            </div>
        </div>
    )
}

export default SignUp