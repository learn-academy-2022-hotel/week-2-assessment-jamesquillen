// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.


// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("divisibleByThree", () => {
    it("takes an object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
        expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
        expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
        expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
})


// b) Create the function that makes the test pass.

// PSEUDOCODE
// input: and object containing a number
// output: a string stating if the number within the object is divisible by three or not

// Declare a function called divisibleByThree
// Add a parameter to accept an object
// Extract the number from the object
// Check to see if the extracted number is divisible by three or not
// Return a string saying the extracted number is divisible by three if it is, or that it is not if not

const divisibleByThree = (object) => {
    if (object.number % 3 === 0) {
        return `${object.number} is divisible by three`
    } else {
        return `${object.number} is not divisible by three`
    }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.


// a) Create a test with expect statements for each of the variables provided.


const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("makeArrayCapitalized", () => {
    it("takes in an array of words and returns an array with all the words capitalized", () => {
        expect(makeArrayCapitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(makeArrayCapitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})


// b) Create the function that makes the test pass.

// PSEUDOCODE
// input: an array of lowercase strings values
// output: an array of capitalized strings values

// Declare a function called makeArrayCapitalized
// Add a parameter to accept an array
// Map over the array and capitalize the first character of every item in the array

const makeArrayCapitalized = (array) => {
    return array.map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
    })
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.


// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("firstVowelIndex", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        expect(firstVowelIndex(vowelTester1)).toEqual(1)
        expect(firstVowelIndex(vowelTester2)).toEqual(0)
        expect(firstVowelIndex(vowelTester3)).toEqual(2)
    })
})


// b) Create the function that makes the test pass.

// PSEUDOCODE
// input: a string
// output: the index of the first vowel in the inputted string

// Declare a variable called firstVowelIndex
// Add a parameter to accept a string
// Iterate through the inputted string
// Check each iteration to see if the returned value is a vowel
// If the value is a vowel, return the index number

const firstVowelIndex = (string) => {
    return (string.search(/[aeiou]/))
    }

