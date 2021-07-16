
const validation = (values:any)=>{
    let errors:any = {}
    
    Object.keys(values).map(item=>{
        if(!values[item]){
            errors[item] = 'Field is required'
        }
    })

    return errors
}

export default validation
