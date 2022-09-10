import { Form, FloatingLabel } from 'react-bootstrap';
import signUpInputText from '../../DAL/signUpInputText';
import { validate } from '../../common/validations';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import formInputData from '../../DAL/formInputData';
import { useState } from 'react'
import "./SignUp.css";
import { Link, useNavigate } from 'react-router-dom';
import { postSignUpRequest } from '../../DAL/serverFunctions';

function SignUp() {

    const navigate = useNavigate()
    const validationsToCheck = ["email", "first_name", "last_name", "password"]
    const [loginForm, setLoginForm] = useState(formInputData)
    const [allValid, setAllValid] = useState(false)
    const [userInputs, setUserInputs] = useState({})
    const [emailTaken, setEmailTaken] = useState()

    function updateInputs(name, value) {
        userInputs[name] = value
        setUserInputs({ ...userInputs })
    }

    function validateInput({ target: { name, value } }) {
        const targetKey = formInputData[name]
        targetKey.errors = validate(targetKey["name_error"], value, formInputData[name].validations)
        targetKey.value = value
        updateInputs(name, value)
        if (targetKey.errors.length === 0) {
            setAllValid(true)
        } else {
            setAllValid(false)
        }
        setLoginForm({ ...loginForm })
    }

    async function submitValidations(e) {
        e.preventDefault()
        for (const input in formInputData) {
            if (validationsToCheck.includes(input)) {
                validateInput({
                    target: {
                        name: input,
                        value: formInputData[input].value
                    }
                })
                //sending a new object with the right parameters (validate input gets an object)
            }
        }
        if (allValid) {
            const registered = await postSignUpRequest(userInputs)
            if(registered){
                navigate('/about')
            } else {
                setEmailTaken('Email is taken!')
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
                                name={name}
                                name_error={label} />
                            <ErrorMessage errors={formInputData[name].errors}></ErrorMessage>
                        </FloatingLabel>
                    )
                }
                <p id='emailTaken'>{emailTaken}</p>
                <footer className="signUpFooter">
                    <button className="signUpBtn" onClick={submitValidations}>SIGN UP</button>
                    <Link className="loginLink" to="/login">Already Have An Account? Login!</Link>
                </footer>
            </div>
        </div>
    )
}

export default SignUp