## 25th April:

### Intro to JavaScript


- Till now we've learnt 2 new things -
 - HTML
 - CSS

- Then we learnt bootstrap(library)

- JavaScript (backbone of web D, especially frontend)

- React(library) - written in JS

- Later when you learn backend, you'll see nodejs(backend runtime env) - written in JS


- With JS in frontend, we have 3 options
 1. Vanilla JavaScript - no external libraries or frameworks
 2. ReactJS - library
 3. Angular


### Where can I write JS?

1. Browser console
2. Any html file, inside script tag
3. Multiple script tags in a single html file are allowed
4. Link external script file

- window - the browser object model - it allows the JS to talk to the browser
- window.document or document
- document.getElementById("idname").innerHTML="yourcontent"
- Single line comments and multiline comments
- Variables and statements in JS
- Whitespaces

- In a js statement, we can have variables and literals
- literals are fixed values - numbers(10.5,1001), and strings

- let, var and const => let and var can be redefined, const cannot be.
- Variable names(also called identifiers)
  - They can start with A-Z or a-z, $, or _ , after this it can be any letters, digits, underscores or dollar signs

- #IMP => Javascript is case sensitive

## Ways to declare a javascript variables - 
 - using var
 - using let
 - using const
 - using nothing

## Var
- The scope of var variable is global when we define it outside a function. 
- The scope of var variable is function when it is declared inside a function.
- We can redefine var with/without using the var keyword again
<pre>
  var greeter = "say hello"
  var greeter = "say hello twice"

  greeter = "say hello thrice"
</pre>
- Hoisting  - It's a JS mechanism where variables and function declarations are moved to the top of their scope before code execution.
- Hoisting of var 
<pre>
console.log(sayHello)
var sayHello = "hey there"

// is interpreted as

var sayHello;
console.log(sayHello); // undefined
sayHello = "hey there"
</pre>

- For let, hoisting takes place as well, but in this case, let keyword is not initialized, therefore we get a Reference Error


## 26th April:

### JavaScript Variables

#### var, let and const
- var declarations are globally scoped or function scoped while let and const are block scoped.
- var variables can be updated and re-declared within it's scope.
- let variables can be updated but not re-declared
- const variables can never be updated nor re-declared.
- They are all hoisted to the top of their scope. But while var variables are intialized(gives undefined on printing), let and const variables are not intialized(gives reference error).
- While var and let can be declared without being initialized, const must be initalized during declaration.

### Arithmetic Operators
- +
- -
- *
- /
- %
- ++ (increment by 1)
- minus sign twice(--) (decrement by 1)
- ** exponentiation

### Assignment Operators
- =
- +=
- -=
- *=
- /=
- %=  x%=y => x = x%y
- **= 

### String Operators
- +(append)

### Strings and Numbers
- y="5"+5    =>  55
- y="5"*5    => 25
- y=5*"5"    => 25

### Comparison Operators
- == equal to
- === equal value and equal type
- != not equal
- !== not equal value or not equal type
- &gt; (>) greater than
- &lt; (<) less than
- &gt;= greater than or equal to
- &lt;= lesser than or equal to
- ? ternary (conditon ? if true : if false)

### Logical Operators
- && logical and 
- || logical or
- ! logical not

### Type Operators
- typeof

### Bitwise Operators
- & AND
- | OR
- ~ NOT
- ^ XOR
- << left shift
- &gt;&gt; right shift
- &gt;&gt;&gt; unsigned right shift

### Data Types
- Numbers
- String
- Boolean
- Array
- Objects
- undefined => A variable without a value

### undefined vs null
#### Definition
- null is the intentional absence of the value. It is one of the primitive values of JS
- undefined means the value does not exist in the compiler.

#### Type
- null: Object
- undefined: undefined

#### Equality
- null == undefined // true
- null === undefined // false
- It means null is equal to undefined but not identical

#### When we define a variable to be
- undefined then we are trying to convey that the variable does not exist.
- null then we are trying to convey that the variable is empty

- null is also referred as false

### Functions
- Invoking a function
 - When an event occurs(when a user clicks a button)
 - When it is invoked from JavaScript code
 - Automatically (self invoked)

### this keyword
- this keyword refers to an object
- which object? depends on how "this" is being invoked

- In an object method, "this" refers to the object
- Alone, "this" refers to the global object
- In a function, "this" refers to the global object
- In an event, "this" refers to the element that received the event.
- Methods like call(), apply(), bind() can refer "this" to any object.

#### this is not a variable, you cannot change the value. It's a keyword

#### If else, if else if
#### Switch case

## 28th April:

### JS Events

- HTML events are "things" that happen to HTML elements
- When JS is used in HTML pages, it can "react" on these events.

### HTML Events
- HTML web page finished loading - onload
- HTML input field was changed - onchange
- HTML button was clicked - onclick
- onmouseover - user moves the mouse over an HTML element
- onmouseout - The user moves the mouse away from an html element
- onkeydown - user pushes a keyboard key

## Comparing two javascript objects always return false


## String Methods
- length

### Extracting String Parts
- slice(start, end) => slice extracts a part of a string and returns the extracted part in a new string, end position is not included
- substring(start, end) => Similar to slice, but substring cannot accept negative values
- substr(start, length) => Similar to slice, but substr's second argument is the length

### String Methods cont.
- replace
  - replace() method does not change the string it is called on
  - replace() method returns a new string
  - replace() method only replaces the first match
- toUpperCase()
- toLowerCase()
- concat()
- trim()
- String Padding
 - padStart()
 - padEnd()
- charAt()
- IMP split() => converts string to array
- - - 
- All string methods return a new string, they don't modify the original string.
- Strings are immutable: Strings cannot be changed, only replaced

--- 
- Template Literals

## Number Methods
- toString()
- toExponential()
- toFixed() => how many digits after decimal
- toPrecision(n) => returns a string with a number written with a specified length(n)
- Number() => converts javascript variables to numbers, returns NaN if number cannot be converted.


## 29th April:

### JS Topics

#### Arrays
- arr.length
---
#### For loops
- for loop
- for in loop
- forEach loop => this method calls a function(a callback function) once for each array element
 - It takes 3 arguments
  - The item value
  - The item index
  - The array itself
- Avoid creating arrays using new Array()
- Array.isArray(fruits) //true if fruits is an array
- fruits instanceof Array // true if fruits is an array
- push
- pop
- shift
- unshift
- concat
- sort
- reverse
--- 
IMP Methods
- Splicing => Splice method is used to add new items to an array, but it can also be used to remove items from an array
 - 1st arg is the new element should be added/spliced in, or the element to be removed
 - 2nd arg is 0 if you want to add elements, or the number of elements you want to remove
 - 3rd onwards, give multiple elements to add
- Slicing
 - It slices out a piece of an array into a new array

---
- forEach => iterates over an array and calls a given func for each element => does not return anything
- map => creates a new array by performing a function on each array element
- filter => creates a new array with array elements that passes a given test