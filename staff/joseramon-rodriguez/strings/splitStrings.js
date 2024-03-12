function splitStrings(string, separator, limit) {

    var result = []
    var toAdd = ''
    var isIncluded = false

    for (var i = 0; i < string.length; i++) {
        if (string[i] === separator)
            isIncluded = true
    }

    if (separator === undefined || isIncluded) { // o no se incluye el separador en el string

        result.push(string)

        return result
    }

    if (limit === 0)
        return result

    if (limit > 0) {

        var newStart = 0

        var limitBreak = true
        var numberOfIterations = 0

        for (var i = 0; limitBreak; i++) {
            if (separator === '') {
                for (var j = 0; j < string.length; j++) {
                    result.push(string[j])

                    numberOfIterations++

                    if (numberOfIterations === limit) {
                        limitBreak = false

                        break
                    }
                }

                return result
            }

            for (var k = newStart; k < string.length; k++) {
                if (string[k] === separator) {
                    result.push(toAdd)

                    toAdd = ''

                    newStart = k + 1

                    numberOfIterations++

                    if (numberOfIterations === limit)
                        limitBreak = false

                    break
                }

                toAdd = toAdd + string[k]

                if (k === string.length - 1) {

                    result.push(toAdd)

                    limitBreak = false
                }
            }
        }
        return result
    }

    if (separator === '') {
        for (var i = 0; i < string.length; i++) {
            result.push(string[i])
        }
        return result
    }
    for (var i = 0; i < string.length; i++) {
        if (string[i] === separator) {

            result.push(toAdd)
            toAdd = ''

            continue
        }

        toAdd = toAdd + string[i]

        if (i === string.length - 1)
            result.push(toAdd)
    }

    return result
}

console.log('CASE 1 : split the string -> the world <- with no separator or limit specified')
console.log(splitStrings('the world'))//expected result ['the world']

console.log('CASE 2 : split the string -> the world <- with separator ->" "<- and no limit specified')
console.log(splitStrings('the world', ' '))//expected result ['the, world']

console.log('CASE 3 : split the string -> the world <- with separator ->"/"<- and no limit specified')
console.log(splitStrings('the world', '/'))//expected result undefined

console.log('CASE 4 : split the string -> the world <- with separator ->""<- and no limit specified')
console.log(splitStrings('the world', ''))//expected result ['t,h,e, ,w,o,r,l,d']

console.log('CASE 5 : split the string -> the world <- with separator ->" "<- and  limit specified -> 1 ')
console.log(splitStrings('the world', ' ', 1))//expected result ['the']

console.log('CASE 5 : split the string -> the world <- with separator ->" "<- and  limit specified -> 2 ')
console.log(splitStrings('the world', ' ', 2))//expected result ['the, world']

console.log('CASE 6 : split the string -> the world <- with separator ->" "<- and  limit specified -> 33 ')
console.log(splitStrings('the world', ' ', 33))//expected result ['the, world']

console.log('CASE 7 : split the string -> the world <- with separator ->""<- and  limit specified -> 1 ')
console.log(splitStrings('the world', '', 1))//expected result ['t']

console.log('CASE 8 : split the string -> the world <- with separator ->""<- and  limit specified -> 2 ')
console.log(splitStrings('the world', '', 2))//expected result ['t,h']

console.log('CASE 9 : split the string -> the world <- with separator ->""<- and  limit specified -> 33 ')
console.log(splitStrings('the world', '', 33))//expected result ['t,h,e, , w,o,r,l,d']

console.log('CASE 10 : split the string -> the world <- with separator ->""<- and  limit specified -> 0 ')
console.log(splitStrings('the world', '', 0))//expected result []

console.log('CASE 11 : split the string -> the world <- with separator ->""<- and  limit specified ->  ')
console.log(splitStrings('the // world', '//'))//expected result [] TODO
