function sliceString(string, indexStart = 0, indexEnd = string.length) {

    var result = ''

    if (indexStart < 0)
        indexStart = string.length + indexStart


    if (indexStart === undefined)
        indexStart = 0

    if (indexEnd < 0)
        indexEnd = string.length + indexEnd

    if (indexEnd === undefined || indexEnd >= string.length)
        indexEnd = string.length


    if (indexStart >= string.length || indexEnd <= indexStart)
        return result

    for (var i = indexStart; i < indexEnd; i++) {
        result = result + string[i]
    }
    return result
}

console.log('CASE 1 : slice the string 0123456 with start at index 3 and no end specified')
console.log(sliceString('0123456', 3))//expected result 3456

console.log('CASE 2 : slice the string 0123456 with start at index -3 and no end specified')
console.log(sliceString('0123456', -3))//expected result 456

console.log('CASE 3 : slice the string 0123456 with start at index 3 and end 6')
console.log(sliceString('0123456', 3, 6))//expected result 345

console.log('CASE 4 : slice the string 0123456 with start at index 3 and end - 3')
console.log(sliceString('0123456', 3, -3))//expected result 3

console.log('CASE 5 : slice the string 0123456 with start at index -3 and end -1')
console.log(sliceString('0123456', -3, -1))//expected result 45

console.log('CASE 6 : slice the string 0123456 with start at index 3 and end -6')
console.log(sliceString('0123456', 3, -6))//expected result empty string

console.log('CASE 7 : slice the string 0123456 with start at index -4 and end 3')
console.log(sliceString('0123456', -4, 3))//expected result empty string

console.log('CASE 8 : slice the string 0123456 with start at index 45 and end 3')
console.log(sliceString('0123456', 45, 3))//expected result empty string

console.log('CASE 9 : slice the string 0123456 with start at index -4 and end 33')
console.log(sliceString('0123456', -4, 33))//expected result 3456