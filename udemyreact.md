
Git Flow Notes (to be exported):
-``git checkout -b branchName` creates a branch
- `git branch check` check the branches and see which one is active
- `git push origin dev` pushes a new branch to github
- `git checkout -b feature/featureName` creates a new feature branch
- `git branch -d feature/featureName` deletes the feature branch locally
- `git push origin :feature/featureName` deletes the feature branch from github
- `git push --set-upstream origin featureName`  push features from one branch to another that has to be answered with a pull request

# In Github
- compare and pull request
- deal with merge conflicts
- Have master, development, and feature branches
- github will show the default, active, and your branch on its UI

- Course Outline:
    - 1. Getting Started
    - 2. The basics - component talk to each other
    - 3. Debugging
    - 4. Styling react components
    - 5. Component Life cycle, check for updates
    - 6. HTTP Requests
    - 7. Routing - for SPAs and rendering pages. Parse URL with JS
    - 8. Fetch and validate User input
    - 9. Redux
    - 10. Authentication (focus on client side) + working with any backend
    - 11. Testing React Apps
    - 12. Deploying react Apps
    - 13. Next.js
    - 14. Webpack
    
# JavaScript Advanced Review

Remember: A *parameter* is the variable which is part of the method’s signature, during method declaration. An *argument* is an expression used when calling the method. Argument is what can be set, but the parameter is the template that is overwritten with an argument's value.


1. (**Higher Order Functions & Arrays**)[https://www.youtube.com/watch?v=rRgD1yVwIvE]
forEach, Map, Filter, Sort, Reduce


-----

**.forEach()**

*for*
```js
for(let i =; i < companies.length; i++) {
    console.log(companies[i]);
}
```

*forEach*
```js
companies.forEach(function(company){                <--- arguments
    console.log(company.name);
})
```

`forEach` is like, for every item in an array do this thing. *It doesn't return anything, it has no produced value. It changes the original array.*

forEach() may be preferable when you’re not trying to change the data in your array, but instead want to just do something with it — like saving it to a database or logging it out.

-----

**.filter()**

*for on an array*
```js
let canDrink = [];
for(i = 0; i < age.length; i++) {
    if(ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}
```

*filter on an array*
```js
const canDrink = ages.filter(function(age){         <--- defined an age argument from "ages" array
    if(age >= 21) {
        return true;
    }
})

console.log(canDrink);
```

*filter shorthand arrow function on an array*
```js
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);
```

`filter` is like, for each item in the array that matches a condition, do this. It's like a conditional `forEach`.


*filter 2*
```js
const retailCompanies = companies.filter(function(company) {
    if(company.category === `Retail`){
        return true;
    }
})
console.log(retailCompanies);
```

*filter shorthand arrow function2 on an object*
```js
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);
```

*filter shorthand arrow function3 two conditions on an object*
```js
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompanies);
```

------

**.map()**

*map create an array*
```js
const companyNames = companies.map(function(company){
    return company.name;
});
console.log(companyNames);
// returns 0: " " 
// 1: " " and so forth
```

*map create an array with template literal strings*
```js
const templateString = companies.map(function(company){
    return `${company.name} (${company.start} - ${company.end})`;
})

const templateString = companies.map(company => `${company.name} (${company.start} - ${company.end})`);

console.log(templateString);

// returns "Company One (1981 - 2003)"
```

*map create an array with operation*
```js
const ageSquare = ages.map(age => Math.sqrt(age));
console.log(ageSquare);
```

*map create an array with chained operation*
```js
const ageSquare = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
console.log(ageSquare);
```

`map` performs some kind of operation of every item instead of using a condition to find and cut down the values and return that. The whole point is to return something relevant for each item. *It creates a new array, that's why it's different than forEach. It leaves the original array unchanged*

And map() might be preferable when changing or altering data. Not only is it faster but it returns a new Array


-----

**.sort()**

*sort*
```js
const sortedCompanies = companies.sort(function(c1, c2) {
    if(c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});
```

*sort w/ ternary operator and arrow function*
```js
const sortCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1)); // <---- see this rare ternary operator
console.log(sortedCompanies);
```

a.start > b.start ? 1 : -1

**"if the first number is greater than second number which if true will return 1, if not will return -1."**


*sort integers in descending order*
```js
const sortAges = ages.sort((a, b) => b - a);                          // <----- flip to `a - b` for descending order
console.log(sortedCompanies);
```

`sort` takes in a function that takes in two values and compares them and returns 1 or negative 1 to move it up and down in order of the array.

----- 

**.Reduce()**

*for loop equivalent to a `.reduce()` to sum array integers*
```js
let ageSum = 0;
for(let i = 0; i < age.slength; i++) {
    ageSum += ages[i];
}
console.log(ageSum);
```

// 460

the `for` loop iterates through the array in this particular setting combines an array's worth of ages for a total sum


*`reduce` to replicate summing an array of integers*
```js
const ageSum = ages.reduce(function(total, age){
    return total + age;
}, 0);
console.log(ageSum);

// 460
```


*`reduce` to replicate summing an array of integers in shorthand w/ arrow function*
```js
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// 460
```

*`reduce` to sum the distance between the object's two values*
```js
const totalYears = companies.reduce(function(total, company) {
    return total + (company.end - company.start); 
    }, 0);                                                           // <------ remember to indicate 0 here
})
console.log(ageSum);

// 119
```

*`reduce` to sum the distance between the object's two values shorthand w/ arrow function*
```js
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(ageSum);

// 119
```

`reduce` is all about summing integers or strings together within an array based on a total you define either 0 or "" I believe


-----

**Combined Methods**


*`reduce` to sum the distance between the object's two values shorthand w/ arrow function*
```js
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(a geSum);

// 119
```




2. (**Async JS - Callbacks, Promises, Async/Await**)[https://www.youtube.com/watch?v=PoRJizFvM7s&t=2s]


-----

3. (**Try/Catch**)[]


    
# Getting Started Notes - 
- React is a JS library for building UIs.
- Note: There's a difference between a single component and  stateful component.
    - The navbar is an instance of where I tried to create a stateful component. The constructor function is what enables this.
    - for instance
    ```javascript
    constructor(props) {
        super(props);                           <--- tracks input data
        this.state = { seconds: 0 };            <--- maintain internal state data
    }
    
    tick() {
        this.setState((prevState) => ({
            seconds: prevState.seconds + 1
        })); 
    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    
    render() {                                  <--- a components state data changes causes rendered markup change
        
    }
    
    ```
- Using this on Codepen:
    - Babel is a preprocessor. I believe it enables the JSX.
    - React package "parses" the JS.
    - add React and React dom as external JS libraries
- `ReactDOM.render();` - render a JS function as a component to the dom
    - see codepen-person.js
- jQuery focuses too much on the technicals about reaching the element you want to change.
- Single page versus Multipe Page applications
    - SPAs allow one HTML page, "content is rerendered on the Client side". One ReactDOM call
    - MPAs allow multiple HTML pages, content rendered on the server. React widgets interact with vanilla JS
- **next gen JS refresher**
    - let - lexical scope within functions with variable values, const is a constant value
    - Arrow functions - different synxtax for creating functions.
    ```js
    const printMyName = (name) => {
        console.log(name);
    }
    printMyName('Max'); // "Max"
    ```
    - if you have this case with only a return, you can arrow function like so
    `const multiply = number => number * 2;`
    - omit `return` keyword, omit parentheses around args
    - exports & imports modules
        - `default` export of person
        - a file with multiple exports might have a `export const clean = () => { }` and a `export const baseData = 10;`
        - app.js 
    - there are two types of import statement: 1) `export default componentName` results in a `import componentName from './person.js'`
    - 2) with named exports `export const componentName = () => { }` you need a named import `import {baseData, clean} from './utility.js'`
    - 3) alternatively you can rename the named import `import { smth as Smith } from './utility.js'`
    - 4) you can create a bundle `import * as bundled from './utility.js'` they work as properties.
- classes. Classes take properties and methods.
    - classes are instantiated with the `new` keyword.
    - classes support inheritance like `class Person extends Master`
    - classes take prototypes
- a `constructor()` is a default property method
```js
class Human {
    constructor() {
        this.gender = 'male';                               <--- you have created a gender property with a male as its value
    }
}

class Person extends Human {                                <--- extend 
    constructor() {                                         
        this.name = 'Max';
    }
    printMyName() {
        console.log(this.name);
    }
const person  = new Person();
person.printMyName();
}
```
(see here)[https://codepen.io/official-mitchell/pen/ZdNBre]
- you must call the `super` constructor in a derived class before accessing `this`
    - super is a method which executes the parent constructor
    - classes are blueprints for JS objects, and comparable is constructor functions. Inheritance is comparable to prototypes.
- ES6 --> ES7 differences. Recognize that declaring a property, with regards to a constructor function and this is being shortened, while methods are being declared through destructured arrow functions
- ***Q: Are Babel, Typescript, and Coffeescript mutually exclusive preprocessors?***
- Spread & Rest Operators
    - `...` 
    - Spread operator used to split up array elements or object properties. Add elemetns from old elements from array to new object. 
    - For arrays: `const newArrayName = [...oldArrayName, 1,2,]`
    - For Objects: `const newObject = { ...oldObject, newProp:5}`
    - Rest operator - used to merge a list of functio nargmetns into an array
    - For example: 
    ```js
    function sortArgs(...args) {
        return args.sort()
    }
    ```
-  Destructuring - easily extract array elements object properties and store them in variables
    - spread takes out all elements and properties and distributes them into a new array or property
    - destructuring is about taking out single elements and properties and storing them in arrays or properties
    - array destructuring - `[a,b] = ['hello', 'name']`
    - object destructuring - `{name} = {name: 'Name', age: 28}`

- Spread operator for copying arrays and objects across the app
    - spread properties across a new array or object
    - objects and arrays are reference types - if you reassign them, you're copying the pointer
    
- Array functions review -
    - take a function as an input
    - .sort()
    - .map(): built in array method
    ```js
    const doubleArr = numbers.map((arrayArgument) => {
        return num * 2;
    });
    
    // numbers = [1, 2, 3]
    // dubNums = [2, 4, 6]
    ```
    
    
    - .filter()