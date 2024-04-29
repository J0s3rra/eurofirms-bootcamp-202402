import { validate, errors } from 'com'

const { SystemError } = errors

function loginUser(username, password) {
    //function that logins the user if credentials are correct and validated
    validate.username(username)
    validate.password(password)

    return fetch('http://localhost:8080/users/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 200)
                return res.json()
                    .then(userId => { sessionStorage.userId = userId })

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })

        })

}

export default loginUser