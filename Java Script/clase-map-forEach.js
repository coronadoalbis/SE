// MEthods that iterate over an array.
// Methods that DO NOT modify the original array(Immutability)


// map()

const numbers = [1,2,3,4,5]
const squareNumbers = numbers.map(num =>num * num)

console.log(numbers)
console.log(squareNumbers )

//forEach()

const colors = ["red", "pink", "blue"]
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)


// Exercise: fahrenheit to celsius conversion
const temperaturesInFahrenheit = [32, 68, 95, 104]

const  temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log(" temperatures In Fahrenheit: ", temperaturesInFahrenheit)
console.log("temperatures In Celsius", temperaturesInCelsius)

// Exercise: Suma of elements in an Array 
const newNumbers = [1,2,3,4,5,6]
let sum = 0

newNumbers.forEach(number => {sum = sum + number} )

console.log("Array of Numbers:", newNumbers)
console.log("sum of Numbers:", sum)


