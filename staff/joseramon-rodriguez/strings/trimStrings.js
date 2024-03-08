function trimString(string) {
    var result = ''
    var start = 0
    var end = 0
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            start = i
            break
        }
    }
    for (var i = string.length - 1; i > 0; i--) {
        if (string[i] !== ' ') {
            end = i
            break
        }
    }
    for (var i = start; i <= end; i++) {
        result = result + string[i]
    }
    return result
}

console.log('CASE 1 : trim all the spaces at the beggining and the end of the string ->"          leeroooy  jenkins     "<-')
var case1 = trimString('          leeroooy  jenkins      ')
console.log(case1)