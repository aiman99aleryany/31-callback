// Create two functions: the first one is called sayHelloName and takes is as parameter another function (the second one) called printName.
// The printName function should just execute the console.log() method and print the name. The sayHelloName that takes in the callback as parameter, must execute the console.log() of the "Hello" string and after that invoke the function passed as parameter.

function sayHelloName(func) {
  console.log("Hello");
  func();
}

function printName(name) {
  console.log(name);
}

// * they didn't quite explain the task, so I assume that the sayHelloName takes 2 parameters, the name and the function, otherwise how are we supposed to get the name? but I only coded the required task, I didn't add anything extra.
