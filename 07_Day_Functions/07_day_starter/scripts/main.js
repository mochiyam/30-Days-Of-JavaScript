// console.log(countries)
// alert('Open the console and check if the countries has been loaded')


const sumAllNums = (...args) => {
 console.log(arguments)//, arguments object not found in arrow function
 // instead we use a parameter followed by spread operator (...)
 console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]