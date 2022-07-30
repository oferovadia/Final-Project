const formInputData = {
    username: {
        value: '',
        validations: {
            required: true,
            minLength: 2
        },
        errors: []
    },
    email: {
        value: '',
        validations: {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        },
        errors: []
    },
    address: {
        value: '',
        validations: {
            required: true,
            minLength: 10
        },
        errors: []
    },
    password: {
        value: '',
        validations: {
            required: true,
            minLength: 8
        },
        errors: []
    }
    // gender: {
    //     value: '',
    //     validations: {
    //         required: true,
    //     },
    //     errors: []
    // }
}

export default formInputData