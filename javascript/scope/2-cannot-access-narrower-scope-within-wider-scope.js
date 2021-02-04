/**
 * A variable declared in narrower scope (with let or const)
 *  cannot be accessed in wider scopes.
 */

let greeting = "Hello world!";

function printGreeting() {
  let innerGreeting = "Hi there!";
  console.log("wider scope accessed in inner scope:", greeting);
  console.log("accessing variable directly in scope:", innerGreeting);
}

console.log("from main script:", greeting);
printGreeting();

// below line will give reference error
// can't access innerGreeting from this wider scope:
// it was defined in a more narrow scope
console.log("trying to access a narrower scope, but can't:", innerGreeting);
