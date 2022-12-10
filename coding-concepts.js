// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
// console.log(cohort.split(""))

// a) Your answer:
    // ["H", "o", "t", "e", "l", " ", "2", "0", "2", "2"]

// b) Verify and explain:
    // I receieved the expected output. The .split() method takes a string and creates an array based on the elements characters in the string. The .split() method has optional parameters. Using close quotation marks, the string will separate every character in the string (including spaces) and make each chatacter its own element of the new array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// const greeter = (name) => {
//    return `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer:
      // It won't return anything because there is no "return" in the body of the function.

// b) Verify and explain:
    // It returns "undefined". This makes sense, as the code runs correctly but the results are never properly fed back to the console. Adding "return" to the front of the string interpolation will output the expected result.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer:
    // [8, 10, 12, 14, 16]

// b) Verify and explain:
    // This worked as expected. The .map() method goes over every element in the array and miltiplies each value by two, then returns a new array with the updated values.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:
    // [11, 13, 15]

// b) Verify and explain:
    // This worked as expected. The .filter() method goes over every element in the array and filters elements that meet certain criteria. In this case, the method is asking to filter all elements that are not evenly divisible by two (odd numbers) and return a new array with those values.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:
    // Javascript

// b) Verify and explain:
    // This worked as expected. myCodingSkills is an object and the console.log() dot notation in the log is accessing the item at the first index in the array value of the language:array key:value pair of the object.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:
  // {student : "George", cohort: "Hotel", year : 2022}

// b) Verify and explain:
  // Learn { student: 'George', cohort: 'Hotel', year: 2022 }
  // My syntax is slightly off and I forgot to include the class name in the answer. The 'learnStudent' constant instantiates a new object and feeds the argument "George" into it to populate the student key inside the object.