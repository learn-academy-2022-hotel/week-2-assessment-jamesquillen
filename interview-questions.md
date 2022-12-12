# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer:

Parameters and methods are both related to functions and methods. Functions and methods often, but not always, have parameters and arguments. I will refer to a function fom now own, but the same information applies to methods. When a function is created and needs some type of data introduced into it to perform its job, a parameter is added. Parameters are placeholders for mandatory or optional data to be fed into a function. The presence of a parameter indicates that some kind of information needs to be provided to the function so the function can then act upon that information. Paramters allow functions to be dynamic since many placeholders can be fed into function and not hard coded into the statement of the funciton itself. Parameters can also be optional and allow for a function to change its output or change how it performs its task, depending on how the parameters are set up. 

Arguments are the actual data inputted into the parameter placeholders when a function is called. If a function has a paramter for a name, the argument would be "John" or some other name. If a function has two parameters and performs the function of adding the two parameters together, the arguements would be two acual numbers. 

Parameters and arguments are closely related. If a parameter is the blank space in a Madlib asking for a noun, the arguement is whatever noun the Madlib player chooses.

Researched answer:

Functions have three parts: a name, paramter(s), and a statement (code block). While parameters are optional, without them functionality is limited. Parameters are formal argument names. Paramters must be strings and separated by commas if there are more than one. These parameters are passed to the function where the statement performs some sort of action on them. 

Arguments are the real, inputted values of a function's parameter(s). Mandatory parameters will need to be given arguments for the parent function to run correctly, while optional arguments are not striclty required for a function to work.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer:

The .map() method iterates over and array and performs wahetever arguments are inputted to each element in that array. I know of two parameters for this method. The first, and only, required parameter is the value of the element in the array. Since every element in the array is acted upon with the method, the values of every item needs to be passed into the method. For example, if every element of an array of strings needed to be turned to all upercase letters, the .toUpperCase() method would need to be called for every element in the array. The only way to pass .toUppCase() to every element would be to have access to the value of every element in the array. And the only way to have access to the value of every element in the array is the use the first mandatory parameter of the .map() method. A second, optional array paramter is the index. I think this paramter returns the indexes of the array in addition to the values, but I have not used this parameter so I am not entirely sure.

Researched answer:

The .map() function creates a new array populated with the results of calling a provided function on every element in the calling array. This method has three parameters: element, index, and array. The element is each element of the array, the index is each index of the array, and the array is the array itself. The functions purpose and desired output will determine which parameters are used. For a simple away, the element paramater must be used to accomplish any kind of functionality. If the values insides an array are never accessed, there would be no puspose in calling the .map() method.

3. What is the difference between map and filter?

Your answer:

The .map() and .filter() methods are both higher order functions usable by arrays. When called, these methods create a new array as output and leave the original array intact. Both of these methods pass over every element in the array, but the output is different for each. 

The map method iterates over every element in an array and performs the same action on each element. For example, if an array of numbers called the map method with a statement to multiply its values by two, the result of the method would be a new array where every element equaled the value of the original array multiplied by 2 ([1, 2, 3] --> [2, 4, 6]). The map method applies to and affects every element in the array it is called on.

The filter method iterates ove every element in an array and extracts each element of the array that matches the criteria created in the method's code statement. For example, if an array of numbers called the filter method with a statement to find only even numbers, the result of method would be a new array only containing even numbers from the original array ([1, 2, 3, 4] --> [2, 4]). The filter method examines every element in an array but only outputs the elements of the array that match the requested criteria. 

Researched answer:

I am happy to use my original answers here.

4. What is iteration?

Your answer:

Iteration is repeating the same action on an object until a certain condition has been met. That condition could be finding a match to a pattern, performing a calculation, or iterating as many times as instructed, among other things. Iteration allows us to perform actions on objects very quickly instead of writing a function to perform on every object individually for each function. 

Researched answer:

I would use the same answer above and add that loops are a form of iteration. A for statement is one of the most basic examples of iteration. A counter is set to 0, then a maximum number of of counts is declared, then a counting method is declared. Once these conditions are set up the function statement instructs javascript what to do for each iteration. 

5. What is the difference between a class and an object?

Your answer:

Classes and objects and closely related concepts in Javascript. Objects are a data type and are usually associated with things that have characteristics such as users, physical objects like cars or a house, or other tangible data. If objects are houses, classes are their blueprints. With one set of blueprints, one could build many houses of the same type. Each house could have different colors and materials, but the skeleton of the house is the same even if some characteristics are different. Objects are usually set up with key:value pairs to represent their characteristics. Once created, the values may be accessed using dot notation and referencing they key of the key:value pair. bobsCar.color would result in "red" if Bob's car was indeed red. Key:value pairs may be nested as deeply as necesssary to represent the level of detail required for an object. bobsCar.engineType.numberCylinders could tell us that the engine in Bob's care is a horizontal 6-cylinder, differentiating it from the more typical V configuration. 

Classes are blueprints for objects that make creating them quick and repeatable. Instead of building objects independently, classes allow us to set up a fill-in-the-blank style scaffold to build objects quickly and with fewer errors. Classes also allow for default values for key:value pairs. This control over how an object is formed makes creating objects scalable and saves time.

Researched answer:

Javascript objects are unordered collections of key:value pairs. These key:value pairs, collectively, are called properties. While keys must be strings, values can almost any type of object, including arrays and functions. Accessing the values may be accomplished by using either dot or bracket notation. Properties may be added or removed to and from objects.

I would keep my definition of classes but add that they can contain their own built in methods.

6. STRETCH: What is hoisting in JavaScript?

Your answer:

I'm cheating because I saw the definition of hoisting while I was looking up other answers.

Researched answer:

Hoisting is Javascript's ability to declare a variable after it has been used. While we normally think of files being read and run from top to bottom, hoisting means a variable can be used before it has been declared. This only works for the "var" keyword. Attempting to use "let" and "const" in this way will result in either an error or code that will not run at all. But while the let and const are not hoisted in the same way as var, Javascript does acknowledge they exist but does not initialize them, meaning their values are not accessible until the code assigning the value to the variable is executed. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories:

User stories are an aspect of Agile software development. A user story is a plain-language, general explanation of a software feautre written from the perspective of an end user. User stories are a few sentences and outline a desired outcome. User stories keep the focus on the user and what they want. They also encourage cirital thinking and create momentum for developers.

2. Spread operator:

The spread operator (...) is a way to copy all or parts of an existing array or object into anothere array or object. The spread operator can accomplish the same thing as certain methods, like the .concat() method, in a more efficient, easier to understand syntax. The spread operator can be used in conjunction with destructering. Objects can quickly be updated with new key:value pairs by using the spread operator, as well.

3. React state:

React states relate to objects and information about those objects that may change over time. State is important because it helps control the rendering of objects on a page. Because state is internal to an object, a React component can render itself without affecting other components on the page. This is much more efficient than re-rendering an entire page when only one part of it needs to be updated.

4. React props:

React props are arguments passed into React components. Props also pass data between components as parameters. Props allow access to react component values similar to do notation access to a normal Javascript object, but within the React component construct.

5. DOM events:

DOM events are used to call functions when, during or after, certain events take place within a web page. DOM events allow for many options on when and how to call a function, such was when the mouse hovers over a certain area or while the scroll bar is being scrolled. DOM events allow for extremely fine contorl over when a function is called within the DOM model becaude of the vast number of events available.