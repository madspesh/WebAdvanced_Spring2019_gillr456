

console.log("Hello!");

var GreetingContainer;

GreetingContainer = "This is a new variable!";

console.log(GreetingContainer);

// alert('Greetings: ' + GreetingContainer);

document.write('<p>' + GreetingContainer + '</p>');


// Length means the number of elements, eg. 3

var array = document.getElementsByClassName('msg');
var attributes = ["Red" , "Green" , "Blue"];

for (var i = 0; i < attributes.length; i++) {
	for (var i = 0; i < array.length; i++) {
	array[i].innerHTML = attributes[i];
	}
}



