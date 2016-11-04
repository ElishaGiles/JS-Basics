//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
  if(name === "Tyler") {
    return true;
  }
  else {
    return false;
  }
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName() {
  var name = prompt("What is your name?");
  return name;
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var name = getName();

function welcome(name) {
  alert("Welcome, " + getName());
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

// When a function is called, what's passed in is the argument. The parameter is the space filler for what's being passed in.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


// false, null, 0, "", NaN, undefined
// it's not truthy


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName() {
  return "Elisha";
}


//Now save the function definition of myName into a new variable called newMyName

// var newMyName = myName();

//Now alert the result of invoking newMyName

function newMyName(myName) {
  alert(myName());
}
//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
  return function() {
    return "Elisha";
  };
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
