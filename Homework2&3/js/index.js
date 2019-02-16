

// This checks the JS file is connected, and runs the first action on load.
document.addEventListener("DOMContentLoaded", function(){
    console.log("JS is connected.");
    advanceTo(action.one);
});

// This saves the text and button sections from the HTML as variables called text and buttons.
var text = document.getElementById("text");
var buttons = document.getElementById("buttons");

// This saves a function (which inserts the action text into the HTML) as a variable called changeText. I will refer to this later.
var changeText = function(words) {
  text.innerHTML = words;
};

// This saves a function (which inserts the action buttons into the HTML) as a variable called changeButtons. I will refer to this later.
// The for-loop is telling JS that for every button listed, insert a new button along with its custom CSS classes.
var changeButtons = function(buttonList) {
  buttons.innerHTML = "";
  for (
    var i = 0;
    i < buttonList.length;
    i++) {
    buttons.innerHTML += "<a href='#' class='btn btn-2 btn-2i' onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</a>";
    }
};

// This saves a function (which inserts the action buttons into the HTML) as a variable called advanceTo.
// Each action in the list links to another action using advanceTo(action.i).
// The quiz automatically starts at advanceTo(action.one) because of my event listener at the top.
var advanceTo = function(action) {
  changeText(action.text)
  changeButtons(action.buttons)
};

// These are my list of actions, which I direct to using the advanceTo function.
// Each action contains the action text which I refer to in my changeText function, and the buttons which I refer to in my changeButtons function.
action = {}
var action = {
  one: {
    text: "Is it morning?",
    buttons: [["Yes", "advanceTo(action.two)"],["No", "advanceTo(action.six)"]]
  },
  two: {
    text: "Are you super tired?",
    buttons: [["Yes", "advanceTo(action.three)"],["No", "advanceTo(action.four)"]]
  },
  three: {
    text: "Have you had caffeine yet?",
    buttons: [["Yes", "advanceTo(action.four)"],["No", "advanceTo(action.five)"]]
  },
  four: {
    text: "Have a tea!",
    buttons: [["restart", "advanceTo(action.one)"]]
  },
  five: {
    text: "Have a coffee!",
    buttons: [["restart", "advanceTo(action.one)"]]
  },
  six: {
    text: "Is it night?",
    buttons: [["Yes", "advanceTo(action.seven)"],["No", "advanceTo(action.eight)"]]
  },
  seven: {
    text: "Do you have a deadline?",
    buttons: [["Yes", "advanceTo(action.five)"],["No", "advanceTo(action.eight)"]]
  },
  eight: {
    text: "Have a hot chocolate!",
    buttons: [["restart", "advanceTo(action.one)"]]
  }
};

