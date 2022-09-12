import { Form, FloatingLabel } from 'react-bootstrap';
import loginInputText from '../../DAL/loginInputText';
import { useState } from 'react'
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { postLoginRequest } from '../../DAL/serverFunctions';

function Login() {

    const navigate = useNavigate()
    const [userInputs, setUserInputs] = useState({})
    const [wrongDetails, setWrongDetails] = useState()

    function updateInput(e) {
        const inputName = e.target.name
        userInputs[inputName] = e.target.value
        setUserInputs({ ...userInputs })
    }

    async function submitValidations(e) {
        e.preventDefault() 
        const userLogged = await postLoginRequest(userInputs)
        if(userLogged){
            navigate('/about')
            window.location.reload();
        } else {
            setWrongDetails('Email or Password is incorrect!')
        }
    }

    return (
        <div className='mainLoginDiv'>
            <div className="loginHeader">
                <h2 className='loginH'>Login</h2>
            </div>
            <div className='loginForm'>
                {
                    loginInputText.map(({ name, label, className, type, placeholder }, index) =>
                        <FloatingLabel
                            key={index}
                            controlId={"floatingInput"}
                            label={label}
                            className={className}>
                            <Form.Control
                                className={"floatingText"}
                                type={type}
                                placeholder={placeholder}
                                onBlur={updateInput}
                                name={name}/>
                        </FloatingLabel>
                        )
                    }
                    <p id='wrongDetails'>{wrongDetails}</p>
                <a className="forgotPassword" href="d">Forgot Your Password?</a>
                <footer className="loginFooter">
                    <button className="loginBtn" onClick={submitValidations}>LOGIN</button>
                    <Link className="signUpLink" to="/signUp">Don't Have An Account? Sign Up!</Link>
                </footer>
            </div>
        </div>
    )
}

export default Login