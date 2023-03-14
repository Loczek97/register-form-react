export default function FormValidation(data) {
    const errors = {}

    if (data.login.length < 3 && data.login.indexOf(' ' === -1)) {
        errors.login = true
    }

    if (data.email.indexOf('@') === -1 && data.email.indexOf('.') === -1) {
        errors.email = true
    }

    if (data.pass.length < 6) {
        errors.passwords = true
    }

    if (data.pass !== data.pass2) {
        errors.passwords = true
    }

    if (!data.isAccepted) {
        errors.isAccepted = true
    }

    return errors
}
