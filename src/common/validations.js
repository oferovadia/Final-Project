export const validate = (nameForError, value, validations) => {
    const errors = []
    if (validations.required) {
        if (!value) {
            errors.push(`${nameForError} is required`)
            return errors
        }
    }
    if (validations.minLength) {
        if(value.length < validations.minLength){
            errors.push(`must be at least ${validations.minLength} characters`)
            return errors
        }
    }
    if (validations.pattern) {
        if(!validations.pattern.test(value)){
            errors.push(`invalid ${nameForError}`)
        }
    }
    
    return errors
}