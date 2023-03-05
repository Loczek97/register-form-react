export default function ValidatePasswords(props) {
    const { pass, pass2 } = props

    //regex for password validation
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/


    //error message
    const errorMess = <p className='text-red-500 font-semibold text-sm' >Hasło musi mieć conajmniej 6 znaków, jedną wielką literę oraz jeden znak specjalny.</p>

    //passwords are not the same message
    const notSameMess = <p className='text-red-500 font-semibold text-sm' >Hasła nie są takie same</p>

    if (pass !== pass2) return 'hasła nie są takie same'

    //if passwords are the same, assign them to userPass

    let userPass = pass

    //if password is not valid, return error message
    if (!passRegex.test(userPass)) return 'niepoprawne hasła'

    //if password is valid, return true
    return 'poprawne hasła'
}
