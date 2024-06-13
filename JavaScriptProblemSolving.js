
// Qustine

// var createCounter = function (n) {
//     return function () {

//     }
// }


//Answer

var createCounter = function (n) {
    let count = 1

    // console.log(n)
    return function () {
        if (count === 1) {
            count++
            return n
        } else {
            return n = n + 1
        }



    }
}

const counter = createCounter(10)

console.log(counter()) //10
console.log(counter()) //11
console.log(counter()) //12




//Simple   Answer


// var createCounter = function (n) {
//     // console.log(n)
//     return function () {

//         return n++
//     }
// }
// const counter = createCounter(10)

// console.log(counter()) //10
// console.log(counter()) //11
// console.log(counter()) //12