const formInputData = {
    first_name: {
        value: '',
        validations: {
            required: true,
            minLength: 2
        },
        errors: [],
        name_error: "First Name"
    },
    last_name: {
        value: '',
        validations: {
            required: true,
            minLength: 2
        },
        errors: [],
        name_error: "Last Name"
    },
    email: {
        value: '',
        validations: {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        },
        errors: [],
        name_error: "Email"
    },
    address: {
        value: '',
        validations: {
            required: true,
            minLength: 10
        },
        errors: [],
        name_error: "Address"
    },
    password: {
        value: '',
        validations: {
            required: true,
            minLength: 8
        },
        errors: [],
        name_error: "Password"
    }
}

export default formInputData