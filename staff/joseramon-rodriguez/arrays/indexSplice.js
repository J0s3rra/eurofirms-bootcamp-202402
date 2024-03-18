//usando el indexOf, encuentra el numero 30
//ahora usando el splice, borralo

var numbers = [10, 20, 30, 40, 50, 60]

var index = numbers.indexOf(30)

numbers.splice(index, 1)

console.log('usando el indexOf, encuentra el numero 30. ahora usando el splice, borralo')
console.log(numbers)

//usando el findIndex encuentra al usuario  con  el id 'g48ge5g' y  borralo

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gjs', name: 'pinocho', email: 'pin@ocho.com', saved: [] }
]

var index = users.findIndex(function (user) {
    return user.id === 'g48ge5g'
})

users.splice(index, 1)

console.log('usando el findIndex encuentra al usuario  con  el id ->g48ge5g<- y  borralo')
console.log(users)

//borrar  todos los numeros impares

var numbers2 = [12, 3, 40, 6, 7, 43, 13, 24, 5]

numbers2 = numbers2.filter(function (number) {
    return !(number % 2 !== 0)
})

console.log('borra  todos los numeros impares')
console.log(numbers2)

// borra todos los usuarios cuyo nombre empiece con 'pe'

var users2 = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48gge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gjs', name: 'pinocho', email: 'pin@ocho.com', saved: [] }
]

users2 = users2.filter(function (user) {
    return !user.name.startsWith('pe')
})

console.log('borra todos los usuarios cuyo nombre empiece con ->pe<-')
console.log(users2)
