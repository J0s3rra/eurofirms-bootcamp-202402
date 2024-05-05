import { validate, errors } from "com"

const { SystemError } = errors

function registerUser(username, email, password, birthdate) {
    validate.name(username, 'username')
    validate.email(email)
    validate.password(password)
    validate.date(birthdate, 'birthdate')

    const wallet = 0

    validate.wallet(wallet)

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ username, email, password, birthdate, wallet })
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 201) return

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default registerUser