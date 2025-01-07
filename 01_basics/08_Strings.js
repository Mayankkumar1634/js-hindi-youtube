// const Name = "Mayank"
// const age = 23

// // console.log(Name + age + " old");

// console.log(`Hello my name is ${Name} and i am ${age} years old`);

const Name = new String("Mayank")

console.log(Name[0]);
console.log(Name.__proto__);

console.log(Name.length);
console.log(Name.toUpperCase());

console.log(Name.charAt(4));
console.log(Name.indexOf('y'));

const newString = Name.substring(0,3)
console.log(newString);

const anotherString = Name.slice(-5, 5)
console.log(anotherString);

const newStringOne = "      Mayank      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mayank.com/mayank%2016explorer"

console.log(url.replace('20', '-'));
console.log(url.includes('mayank'));
console.log(url.includes('kumar'));




