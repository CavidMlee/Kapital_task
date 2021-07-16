
const validation = (values: any) => {
    let errors: any = {}

    Object.keys(values).map(item => {
        if (!values[item]) {
            return errors[item] = 'Field is required'
        }
        return true
    })

    return errors
}

export default validation
