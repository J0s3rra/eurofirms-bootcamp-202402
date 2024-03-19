//usando el reduce,suma todos los numeros del array

var numbers = [0, 12, 5, 40, 6, 7, 24, 13, 21]

var sumAllNumbers = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
})

console.log('usando el reduce,suma todos los numeros del array')
console.log(sumAllNumbers)

// multiplica todos los numeros del array 

var numbers2 = [1, 12, 5, 40, 6, 7, 24, 13, 21]

var multiplyAllNumbers = numbers2.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue
})

console.log('multiplica todos los numeros del array ')
console.log(multiplyAllNumbers)

//suma todos los numeros del array, dando un valor inicial de  10

var numbers3 = [0, 12, 5, 40, 6, 7, 24, 13, 21]

var sumAllNumbersPlusTen = numbers3.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 10)

console.log('suma todos los numeros del array, dando un valor inicial de 10')
console.log(sumAllNumbersPlusTen)

//junta todos los strings del array en uno solo (con el reduce) dando un valor inicial de 'Hola'

var strings = ['mundo', 'pepito', 'como', 'va todo']

var sumStrings = strings.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 'Hola')

console.log('junta todos los strings del array en uno solo (con el reduce) dando un valor inicial de ->Hola<-')
console.log(sumStrings)

//haz un array con todos los usuarios cuyo nombre empiezan con pe

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] }
]


var usersPe = users.reduce(function (accumulator, currentValue) {
    if (currentValue.name.startsWith('pe'))
        accumulator.push(currentValue)
    return accumulator

}, [])

console.log(' haz un array con todos los usuarios cuyo nombre empiezan con pe')
console.log(usersPe)

//haz un array que contenga cada uno de los usuarios, pero solo con la propiedad name y email


var users2 = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]


var userData = users.reduce(function (accumulator, currentValue) {
    delete currentValue.id
    delete currentValue.saved
    accumulator.push(currentValue)
    return accumulator
}, [])



console.log(' haz un array que contenga cada uno de los usuarios, pero solo con la propiedad name y email')
console.log(userData)

//en user3 esta el name como primer valor y surname como el segundo del usuario, crea un objecto que contengaestas propiedades

var users3 = ['peter', 'pan']

var peterObject = users3.reduce(function (accumulator, currentValue, currentIndex) {
    if (currentIndex === 0)
        accumulator.name = currentValue
    else
        accumulator.surname = currentValue
    return accumulator
}, {})

console.log('en user3 esta el name como primer valor y surname como el segundo del usuario, crea un objecto que contengaestas propiedades')
console.log(peterObject)

// users4 es un array que contiene arrays, dentro de este segundo array, tenemos el name en primera posicion
// y el surname en segunda posicion de cada usuario
// crea un array de objetos, donde cada objecto tenga la propiedad name y surname correspondiente

var users4 = [['pepito', 'grillo'], ['wendy', 'darling'], ['peter', 'pan']]

var userObjects = users4.reduce(function (accumulator, currentValue, currentIndex) {
    var toAdd = currentValue.reduce(function (accumulator, currentValue, currentIndex) {
        if (currentIndex === 0)
            accumulator.name = currentValue
        else
            accumulator.surname = currentValue
        return accumulator
    }, {})
    accumulator.push(toAdd)
    return accumulator
}, [])

console.log('crea un array de objetos, donde cada objecto tenga la propiedad name y surname correspondiente')
console.log(userObjects)