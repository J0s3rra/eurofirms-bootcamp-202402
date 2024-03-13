function replaceStrings(string, pattern, replacement) {
    var numberOfreplacemets = 1
    var toCompare = ''
    var resultArray = []
    var resultString = ''
    var indexesToAdd = replacement.length - pattern.length
    var numberOfreplacemets = true

    for (var i = 0; i < string.length; i++) {
        resultArray[i] = string[i]
    }
    //TODO-> check if the type of replacement is a string to only replace 1 time. If the type of replacement is a function  then the function will replace EACH match of the replacement inside  the  string
    if (typeof replacement === 'function')
        numberOfreplacemets = true
    else
        numberOfreplacemets = false
    for (var i = 0; i < resultArray.length && numberOfreplacemets; i++) {
        toCompare = ''
        for (var j = 0; j < pattern.length; j++) {
            toCompare = toCompare + resultArray[i + j]
        }

        if (toCompare === pattern) {
            if (indexesToAdd >= 0) {
                for (var k = 0; k < string.length - replacement.length; k++) {
                    resultArray[string.length - 1 + indexesToAdd - k] = resultArray[string.length - 1 - k]
                }
                for (var k = 0; k < replacement.length; k++) {
                    resultArray[i + k] = replacement[k]
                }
            }
            if (indexesToAdd < 0) {
                indexesToAdd = indexesToAdd * -1
                for (var k = 0; k < string.length - replacement.length - 1 - indexesToAdd; k++) {
                    resultArray[i + 1 + k] = resultArray[i + indexesToAdd + 1 + k]
                }
                for (var k = 0; k < indexesToAdd; k++) {
                    delete resultArray[resultArray.length]
                    resultArray.length--
                }
                for (var k = 0; k < replacement.length; k++) {
                    resultArray[i + k] = replacement[k]
                }
            }
        }
    }

    for (var i = 0; i < resultArray.length; i++) {
        resultString = resultString + resultArray[i]
    }
    return resultString

}


console.log('CASE 1 replace 50 in the string ->-50 dkp minus !<- with the string ->100<-')
var case1 = replaceStrings('-50 dkp minus !', '50', '100')//'-100 dkp minus !'
console.log(case1)

console.log('CASE 2 replace 50 in the string ->-50 dkp minus !<- with the string ->3<-')
var case2 = replaceStrings('-50 dkp minus !', '50', '3')//'-3 dkp minus !'
console.log(case2)

console.log('CASE 3 replace 500000 in the string ->-500000 dkp minus !<- with the strin ->5<-')
var case3 = replaceStrings('-500000 dkp minus !', '500000', '5')//'-5 dkp minus !'
console.log(case3)

console.log('CASE 4 replace 50 in the string ->-50 dkp minus !<- with the string ->60<-')
var case4 = replaceStrings('-50 dkp minus !', '50', '60')//'-60 dkp minus !'
console.log(case4)