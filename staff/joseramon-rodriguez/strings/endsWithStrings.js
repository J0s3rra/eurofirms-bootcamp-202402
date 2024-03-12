function endsWithStrings(string, searchString, endPosition = string.length) {
    var toCompare = ''
    if (searchString === undefined)
        searchString = 'undefined'

    if (endPosition === string.length) {

        for (var i = 0; i < searchString.length; i++) {
            toCompare = toCompare + string[string.length - searchString.length + i]
        }

    }



    if (toCompare[toCompare.length] === string[endPosition] && toCompare === searchString)
        return true

    return false

}

console.log('CASE 1 : check if the string ->more dots!<- ends with the string ->!')
var case1 = endsWithStrings('more dots!', '!')//true
console.log(case1)

console.log('CASE 2 : check if the string ->more dots!<- ends with the string ->a!')
var case2 = endsWithStrings('more dots!', 'a!')//false
console.log(case2)

console.log('CASE 3 : check if the string ->more dots!<- ends with the string ->dots!')
var case3 = endsWithStrings('more dots!', 'dots!',)//true
console.log(case3)

console.log('CASE 4 : check if the string ->more dots!<- ends with the string ->dots!<- with endPosition 1')
var case4 = endsWithStrings('more dots!', 'dots!', 1)//false
console.log(case4)

console.log('CASE 5 : check if the string ->more dots!<- ends with the string ->dots!<- with endPosition 10')
var case5 = endsWithStrings('more dots!', 'dots!', 10)//true
console.log(case5)