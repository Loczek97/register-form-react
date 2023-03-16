export default function FormValidation(data) {
    const errors = {}


    const validateLogin = (login) => {
        if (login.length < 3) return errors.login = true
        if (login.indexOf(' ') !== -1) return errors.login = true
    }

    const validateEmail = (email) => {
        const reg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/
        if (!reg.test(email)) return errors.email = true
    }

    const validatePasswords = (pass, pass2) => {
        if (pass !== pass2) return errors.passwords = true
        if (pass.length < 6) return errors.passwords = true
    }

    const validateIsAccepted = (isAccepted) => {
        if (!isAccepted) return errors.isAccepted = true
    }

    validateLogin(data.login)
    validateEmail(data.email)
    validatePasswords(data.pass, data.pass2)
    validateIsAccepted(data.isAccepted)

    return errors
}
