/**
 * A variable reference looks to the closest declared variable
 */

let greeting = "Hello world!";

function printGreeting() {
  let greeting = "Hi there!";
  console.log("this will read the narrowly scoped greeting:", greeting);
}

console.log("this will read the widely scoped greeting:", greeting);
printGreeting();

// below line will access the widely scoped greeting
// the greeting variable declared inside printGreeting has narrower scope
// and can't be accessed outside the function
console.log(
  "can't access narrowly scoped greeting, so this must be the widely scoped one:",
  greeting
);
