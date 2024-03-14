var nums = [10, 20, 30, 40, 50, 60]
console.log('CASE 1 : find the first number greater than 20')
var case1 = nums.find(function (num) {
    return num > 20
})
console.log(case1)

var strings = ['hola', 'mundo', 'a', 'todos']
console.log('CASE 2 : find the first string that contains the string ->u<-')

var case2 = strings.find(function (string) {
    return string.includes('u')
})
console.log(case2)

var numbers2 = [12, 40, 6, 7, 23]
console.log('CASE 3 : find the first odd number')
var case3 = numbers2.find(function (number) {
    return (number % 2) != 0
})
console.log(case3)

var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' }
]
console.log('CASE 4: find the first user with email ->wendy@darling.com<-')
var case4 = users.find(function (user) {
    return user.email === 'wendy@darling.com'
})
console.log(case4)

var user2 = [
    { name: 'pepito', information: { city: 'madrid', number: '657879959' } },
    { name: 'wendy', information: { city: 'barcelona', number: '7869436' } },
    { name: 'peter', information: { city: 'sevilla', number: '78795040' } },
    { name: 'pinocho', information: { city: 'valencia', number: '57694068' } }
]
console.log('CASE 5 : find the first user with the city ->barcelona<-')
var case5 = user2.find(function (user) {
    return user.information.city === 'barcelona'
})
console.log(case5)