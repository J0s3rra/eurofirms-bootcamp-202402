var Carray = require('./Carray')

console.log('TEST Carray')


console.log('> constructor')

console.log('CASE construct an instance without elements')

var c = new Carray

console.log(c)
// Carray { length: 0 }

console.log('CASE constructs an instance with number elements')

var c = new Carray(10, 20, 30)

console.log(c)
// Carray { 0: 10, 1: 20, 2: 30, length: 3 }

console.log('CASE constructs an instance with string elements')

var c = new Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara')

console.log(c)
// Carray { 0: 'Ana', 1: 'Adrian', 2: 'Javier', 3: 'Sergio', 4: 'Bernat', 5: 'Maite', 6: 'Sara', length: 7 }


console.log('> forEach')

console.log('CASE iterates an instance with number elements')

var c = new Carray(10, 20, 30)

c.forEach(function (element) {
    console.log(element)
})
// 10
// 20
// 30

console.log('CASE iterates an instance with strings to upper-case')

var c = new Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara')

c.forEach(function (element) {
    console.log(element.toUpperCase())
})
// ANA
// ADRIAN
// JAVIER
// SERGIO
// BERNAT
// MAITE
// SARA


console.log('> find')

console.log('CASE find person with age 20')

var people = new Carray(
    { name: 'Peter', age: 30 },
    { name: 'Wendy', age: 25 },
    { name: 'James', age: 20 },
    { name: 'Campa', age: 15 }
)

var person = people.find(function (person) {
    return person.age === 20
})

console.log(person)
// { name: 'James', age: 20 }


console.log('> map')

console.log('CASE maps products from cart to subtotals')

var cart = new Carray(
    { name: 'Socks Adidas', price: 20, quantity: 2 },
    { name: 'Nike Air Max', price: 80, quantity: 1 },
    { name: 'Shorts Puma', price: 30, quantity: 3 },
    { name: 'Glasses Ray Ban', price: 70, quantity: 4 }
)

var subtotals = cart.map(function (product) {
    return product.price * product.quantity
})

console.log(subtotals)
// Carray { 0: 40, 1: 80, 2: 90, 3: 280, length: 4 }

console.log('CASE maps names to upper-case')

var names = new Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara')

var namesInUpperCase = names.map(function (name) {
    return name.toUpperCase()
})

console.log(namesInUpperCase)
// Carray { 0: 'ANA', 1: 'ADRIAN', 2: 'JAVIER', 3: 'SERGIO', 4: 'BERNAT', 5: 'MAITE', 6: 'SARA', length: 7 }

console.log('> push')

console.log('CASE add 40 to c')

var c = new Carray(10, 20, 30)

c.push(40)

console.log(c)
// Carray { 0: 10, 1: 20, 2: 30, 3: 40 length: 4 }

console.log('CASE add 40,50,60 to c')

var c = new Carray(10, 20, 30)

c.push(40, 50, 60)

console.log(c)
// Carray { 0: 10, 1: 20, 2: 30, 3: 40, 4: 50, 5: 60 length: 6}

console.log('> pop')

console.log('CASE remove the last element from c and return it')

var c = new Carray(10, 20, 30)

console.log('before pop()')
console.log(c)
console.log('last element returned')
console.log(c.pop())
console.log('after pop()')
console.log(c)

// Carray { 0: 10, 1: 20, 2: 30, 40 length: 4 }

console.log('> shift')

console.log('CASE remove the first element from c and return the new length of c')

var c = new Carray(10, 20, 30)

console.log('before shift()')
console.log(c)
console.log('first element returned')
console.log(c.shift())
console.log('after shift()')
console.log(c)

// Carray { 0: 20, 1: 30, length: 2 }

console.log('> unshift')

console.log('CASE add 40 to the beggining of c and return the new length of c')

var c = new Carray(10, 20, 30)

console.log('before unshift()')
console.log(c)

console.log(c.unshift(40))

console.log('after unshift()')
console.log(c)

// Carray { 0: 40, 1: 10, 2: 20, 3: 30 length: 4 }

console.log('CASE add 40, 50 , 60 to the beggining of c and return the new length of c')

var c = new Carray(10, 20, 30)

console.log('before unshift()')
console.log(c)

console.log(c.unshift(40, 50, 60))

console.log('after unshift()')
console.log(c)

// Carray { 0: 40, 1: 50, 2: 60, 3: 10, 4: 20, 5: 30, length: 6 }

console.log('> every')

console.log('CASE check if every number in c is less than 40 (via callback) and return a boolean value')

var c = new Carray(10, 20, 30)

console.log(c)
console.log(c.every(num => num < 40))
// true

console.log('CASE check if every number in c is less than 40 (via callback) and return a boolean value')

var c = new Carray(10, 20, 30, 60)

console.log(c)
console.log(c.every((num) => num < 40))
//console.log(c.every(function (num) { return num < 40 }))
// false

