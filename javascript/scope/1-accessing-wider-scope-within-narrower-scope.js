/**
 * A variable declared in outer scope is available to
 *  functions inside the scope.
 */

let greeting = "Hello world!";

function printGreeting() {
  // narrower scope, but can still access `greeting`
  // from the scope the function sits inside
  console.log("from inside function:", greeting);
}

console.log("from main script:", greeting);
printGreeting();
