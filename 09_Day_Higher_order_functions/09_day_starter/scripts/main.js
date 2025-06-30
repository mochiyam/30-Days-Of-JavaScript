let sum = 0;
const numbers = [1, 2, 3, 4, 5];


numbers.forEach((num) => {
    // console.log(num);
    sum += num;
})
// console.log(sum)


const numbersSquare = numbers.map((num) => num * num)
console.log(numbersSquare)

const numbersSquare2 = numbers.forEach((num) => num * num)
console.log(numbersSquare2)
// undefined

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

// Style 1: Block Body with an Explicit Return
const countriesToUpperCase = countries.map((country) => {
    //If you omit the return statement inside a block body (that has {}), the function will return undefined by default.
    return country.toUpperCase(); 
});
console.log(countriesToUpperCase)

// Style 2: Concise Body (omits {}) with an Implicit Return
// For single-expression functions that immediately return a value.
const countriesToUpperCase2 = countries.map(country => country.toUpperCase());

//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

const sums = numbers.reduce((acc, cur) => {
    console.log(acc, cur)
    return acc + cur, 0;
})

console.log(sums)

const numberss = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numberss.sort()) //[100, 3.14, 37, 9.81]
numberss.sort(function (a, b) {
    console.log (a, b)
  return a - b
})

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

console.log(languages)
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]
console.log(c)