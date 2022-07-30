import "./ErrorMessage.css"

const ErrorMessages = (props) => {
    return props.errors.map((error, index) => <span className="errorP" key={index}>{error}</span>)
}

export default ErrorMessages