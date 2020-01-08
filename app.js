//alert("Hello from APPJS File!");
const name = "Tõnu";
const age = 23;
const city = "Tallinn";
const job = "Software Engineer";

console.log('Name: ',name, typeof(name));
console.log('Age: ',age, typeof(age));
console.log('City: ',city, typeof(city));
console.log('Occupation: ',job, typeof(job));

function hello(){
    console.log("Hello!");
}
hello();

//create an unordered list ES5
//let html = '<ul><li>Name:' + name + '</li><li>Age:' + age + '</li><li>City:' + city + '</li><li>Occupation:' + job + '</li></ul>';


//Template Literal ES6
let html = `
    <ul>
        <li>
            Name: ${name}
        </li>
        <li>
            Age: ${age}
        </li>
        <li>
            City: ${city}
        </li>
        <li>
            Occupation: ${job}
        </li>
    </ul>
`;
document.body.innerHTML = html;

//Arrays
const numbers1 = [1, 2, 3, 4, 5];
//add an element to the end of the array
numbers1.push(6);
//add an element to the beginning of the array
numbers1.unshift(0);
//remove the last element of an array
let removedLastElement = numbers1.pop();
//remove the first element of an array
let removedFirstElement = numbers1.shift();
//remove an element from a certain position using SPLICE()
let removedSplicedElement = numbers1.splice(2,1);
//search for an element with a certain value
let searchElement = numbers1.indexOf(5);
console.log(numbers1);
console.log(typeof(numbers1));

console.log('Removed last element: ', removedLastElement);
console.log('Removed first element: ', removedFirstElement);
console.log('Spliced element: ', removedSplicedElement);
console.log('Searched element: ', searchElement);

for(let i = 0; i < numbers1.length; i++){
    console.log("Element: ", i, numbers1[i], typeof(numbers1[i]))
}

let mixedArray = [22, 'banana', true];
console.log(mixedArray);
console.log(typeof(mixedArray));
mixedArray.forEach(element=>{
    if(typeof(element) == 'string'){
        console.log(element, typeof(element), 'Lenght: ', element.length);
    }else{
        console.log(element, typeof(element));
    }
})


//objects

let johnName = 'John';
let johnAge = 30;

let steveName = 'Steve';
let steveAge = 100;

let person1 = {
    name: johnName,
    age: johnAge
}

let person2 = {
    name: steveName,
    age: steveAge
}

let people = [person1, person2];
console.log(people);

people.forEach(person=>{
    console.log('Name: ', person.name);
    console.log(`${person.name} is ${person.age} years old`);
})