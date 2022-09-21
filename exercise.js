// Create two functions: the first one is called sayHelloName and takes is as parameter another function (the second one) called printName.
// The printName function should just execute the console.log() method and print the name. The sayHelloName that takes in the callback as parameter,
// must execute the console.log() of the "Hello" string and after that invoke the function passed as parameter.

function sayHelloName(func) {
  let name = "Aiman"
  console.log("Hello");
  func(name);
}

function printName(name) {
  console.log(name);
}

// I understand callbacks I just didn't understand the task :D, but now everything is good I suppose
