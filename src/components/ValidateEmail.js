export default function ValidateEmail(props) {
    const { email } = props

    //regex for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    //error message
    const errorMess = <p className='text-red-500 font-semibold text-sm' >Niepoprawny adres email</p>

    //if email is not valid, return error message
    if (!emailRegex.test(email)) return 'niepoprawny email'

    //if email is valid, return true

    return 'poprawny email'
}
