export default function ValidateLogin(login) {
    // regex for login validation
    const loginRegex = /^[a-zA-Z0-9._-]{3,}$/

    // error message
    const errorMess = (
        'Login musi mieć conajmniej 3 znaki oraz podkreślnik, kropkę lub myślnik'
    )

    // if login is not valid, return error message
    if (!loginRegex.test(login)) {
        return errorMess
    }

    return ('poprawny login')
}
