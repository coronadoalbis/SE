// How to create an array?
// 1. new Array() or Array()

const fruits = Array("Apple", "Banana", "orange")
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const Number = Array(1,2,3,4,5)
console.log(Number)


// 2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber)


const emptyArray = []
console.log(emptyArray)

const sports = ["soccer", "tenis", "rugby"]
console.log(sports)


const recipeIngredients = [
    "Flour",
    true,
    2,
     {
        ingredient: "Milk",  quantity: "1 cup"

     },
     false


]
console.log(recipeIngredients)

// Accessing array elements

const firstFruits = fruits[0]
console.log(firstFruits)


// length property
const numberOfFruits= fruits.length
console.log(numberOfFruits)


//Mutability
fruits.push("watermelon")
console.log(fruits)

//immutability 
const newFruits = fruits.concat(["grape", "kiwi"])
console.log(fruits)
console.log(newFruits)

// checking arrays with array.is Array()

const isArray = Array.isArray(fruits)
console.log(isArray)


//Practical exercise: sum all elements of on array

const numberArray = [1,2,3,4,5]
let sum = 0

for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i]
    
}
console.log(sum)
    