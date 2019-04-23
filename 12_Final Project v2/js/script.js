// Because we have this "app.main" structure, everything that we want to load has to be inside the variable 'init'.

var app = app || {};
app.main = (function() {


	$.getJSON("js/questions.json", function(data){
		questions = data;
		generateQuestions(questions);
	});
	

	function generateQuestions(data) { // This function loads the JSON data into the handlebars template.
		var list = $('.question .words');
		var source = $("#questions-template").html();
		var template = Handlebars.compile(source);
		list.append(template(data));
	}


	$("#start").click(function() {
		console.log('Start button pushed.');
		$(".words").css("visibility", "visible");
		startQuiz();
	});


	function startQuiz() {
		var i = 1;
		$(".response").click(function() {
			var numberOfClicks = i++;
			console.log("Number of clicks is " + numberOfClicks);
			if (numberOfClicks === 1) {
				advanceTo2();
			}
		});
		/* Calling the yes click function */
		$("#correct").click(function() { // When I click the thumbs up icon:
			/* Inserting my fColor and bColor variables into the API url */
			$.getJSON("js/questions.json", function(data) {
				let bColor = data["one"][0].backgroundcolor;
				let fColor = data["one"][0].color;
				console.log("Question 1 background color is " + bColor);
				console.log("Question 1 text color is " + fColor);
				$.getJSON("https://webaim.org/resources/contrastchecker/?fcolor=" + fColor + "&bcolor=" + bColor + "&api", function(data) {
					/* Storing the pass/fail result as a variable */
					let result = data.AALarge;
					console.log("Question 1 background colour that the 'correct' button is checking is " + bColor + ".");
					console.log("Question 1 text colour that the 'correct' button is checking is " + fColor + ".");
					/* Displaying the pass-correct-answer block if the result is a pass and you answered correct */
					console.log("Question 1 result is " + result + ".");
					if (result === "pass") {
						$("#pass-correct-answer").css("display", "block");
						console.log("Showing question 1 " + result + " result.");
						setTimeout(function() {
							$("#pass-correct-answer").css("display", "none");
						}, 2000);
					/* Displaying the fail-correct-answer block if the result is a fail and you answered correct */
					} else if (result === "fail") {
						$("#fail-correct-answer").css("display", "block");
						console.log("Showing question 1 " + result + " result.");
						setTimeout(function() {
							$("#fail-correct-answer").css("display", "none");
						}, 2000);
					}
				});
			})
		})
		/* Calling the no click function */
		$("#wrong").click(function() { // When I click the thumbs down icon:
			/* Inserting my fColor and bColor variables into the API url */
			$.getJSON("js/questions.json", function(data) {
				let bColor = data["one"][0].backgroundcolor;
				let fColor = data["one"][0].color;
				console.log("Question 1 background color is " + bColor);
				console.log("Question 1 text color is " + fColor);
				$.getJSON("https://webaim.org/resources/contrastchecker/?fcolor=" + fColor + "&bcolor=" + bColor + "&api", function(data) {
					/* Storing the pass/fail result as a variable */
					let result = data.AALarge;
					console.log("Question 1 background colour that the 'wrong' button is checking is " + bColor + ".");
					console.log("Question 1 text colour that the 'wrong' button is checking is " + fColor + ".");
					/* Displaying the pass-wrong-answer block if the result is a pass and you answered wrong */
					console.log("Question 1 result is " + result + ".");
					if (result === "pass") {
						$("#pass-wrong-answer").css("display", "block");
						console.log("Showing question 1 " + result + " result.");
						setTimeout(function() {
							$("#pass-wrong-answer").css("display", "none");
						}, 2000);
					/* Displaying the fail-wrong-answer block if the result is a fail and you answered wrong */
					} else if (result === "fail") {
						$("#fail-wrong-answer").css("display", "block");
						console.log("Showing question 1 " + result + " result.");
						setTimeout(function() {
							$("#fail-wrong-answer").css("display", "none");
						}, 2000);
					}
				});
			})
		})
	}


	function advanceTo2() {
		setTimeout(function() {
			$(".one").remove();
			$("#pass-correct-answer").remove();
			$("#pass-wrong-answer").remove();
		}, 3000);
		/* Calling the yes click function */
		$("#correct").click(function() { // When I click the thumbs up icon:
			/* Inserting my fColor and bColor variables into the API url */
			$.getJSON("js/questions.json", function(data) {
				let bColor = data["two"][0].backgroundcolor;
				let fColor = data["two"][0].color;
				console.log("Question 2 background color is " + bColor);
				console.log("Question 2 text color is " + fColor);
				$.getJSON("https://webaim.org/resources/contrastchecker/?fcolor=" + fColor + "&bcolor=" + bColor + "&api", function(data) {
					/* Storing the pass/fail result as a variable */
					let result = data.AALarge;
					console.log("Question 2 background colour that the 'correct' button is checking is " + bColor + ".");
					console.log("Question 2 text colour that the 'correct' button is checking is " + fColor + ".");
					/* Displaying the pass-correct-answer block if the result is a pass and you answered correct */
					console.log("Question 2 result is " + result + ".");
					if (result === "pass") {
						$("#pass-correct-answer").css("display", "block");
						console.log("Showing question 2 " + result + " result.");
						setTimeout(function() {
							$("#pass-correct-answer").css("display", "none");
						}, 2000);
					/* Displaying the fail-correct-answer block if the result is a fail and you answered correct */
					} else if (result === "fail") {
						$("#fail-correct-answer").css("display", "block");
						console.log("Showing question 2 " + result + " result.");
						setTimeout(function() {
							$("#fail-correct-answer").css("display", "none");
						}, 2000);
					}
				});
			})
			advanceTo3();
		})
		/* Calling the no click function */
		$("#wrong").click(function() { // When I click the thumbs down icon:
			/* Inserting my fColor and bColor variables into the API url */
			$.getJSON("js/questions.json", function(data) {
				let bColor = data["two"][0].backgroundcolor;
				let fColor = data["two"][0].color;
				console.log("Question 2 background color is " + bColor);
				console.log("Question 2 text color is " + fColor);
				$.getJSON("https://webaim.org/resources/contrastchecker/?fcolor=" + fColor + "&bcolor=" + bColor + "&api", function(data) {
					/* Storing the pass/fail result as a variable */
					let result = data.AALarge;
					console.log("Question 2 background colour that the 'wrong' button is checking is " + bColor + ".");
					console.log("Question 2 text colour that the 'wrong' button is checking is " + fColor + ".");
					/* Displaying the pass-wrong-answer block if the result is a pass and you answered wrong */
					console.log("Question 2 result is " + result + ".");
					if (result === "pass") {
						$("#pass-wrong-answer").css("display", "block");
						console.log("Showing question 2 " + result + " result.");
						setTimeout(function() {
							$("#pass-wrong-answer").css("display", "none");
						}, 2000);
					/* Displaying the fail-wrong-answer block if the result is a fail and you answered wrong */
					} else if (result === "fail") {
						$("#fail-wrong-answer").css("display", "block");
						console.log("Showing question 2 " + result + " result.");
						setTimeout(function() {
							$("#fail-wrong-answer").css("display", "none");
						}, 2000);
					}
				});
			})
			advanceTo3();
		})
	}

	function advanceTo3() {
		setTimeout(function() {
			$(".one").remove();
			$(".two").remove();
			$("#pass-correct-answer").remove();
			$("#pass-wrong-answer").remove();
		}, 3000);
		/* Calling the yes click function */
		$("#correct").click(function() { // When I click the thumbs up icon:
			/* Inserting my fColor and bColor variables into the API url */
			$.getJSON("js/questions.json", function(data) {
				let bColor = data["three"][0].backgroundcolor;
				let fColor = data["three"][0].color;
				console.log("Question 3 background color is " + bColor);
				console.log("Question 3 text color is " + fColor);
				$.getJSON("https://webaim.org/resources/contrastchecker/?fcolor=" + fColor + "&bcolor=" + bColor + "&api", function(data) {
					/* Storing the pass/fail result as a variable */
					let result = data.AALarge;
					console.log("Question 3 background colour that the 'correct' button is checking is " + bColor + ".");
					console.log("Question 3 text colour that the 'correct' button is checking is " + fColor + ".");
					/* Displaying the pass-correct-answer block if the result is a pass and you answered correct */
					console.log("Question 3 result is " + result + ".");
					if (result === "pass") {
						$("#pass-correct-answer").css("display", "block");
						console.log("Showing question 3 " + result + " result.");
						setTimeout(function() {
							$("#pass-correct-answer").css("display", "none");
						}, 2000);
					/* Displaying the fail-correct-answer block if the result is a fail and you answered correct */
					} else if (result === "fail") {
						$("#fail-correct-answer").css("display", "block");
						console.log("Showing question 3 " + result + " result.");
						setTimeout(function() {
							$("#fail-correct-answer").css("display", "none");
						}, 2000);
					}
				});
			})
			advanceTo4();
		})
		/* Calling the no click function */
		$("#wrong").click(function() { // When I click the thumbs down icon:
			/* Inserting my fColor and bColor variables into the API url */
			$.getJSON("js/questions.json", function(data) {
				let bColor = data["three"][0].backgroundcolor;
				let fColor = data["three"][0].color;
				console.log("Question 3 background color is " + bColor);
				console.log("Question 3 text color is " + fColor);
				$.getJSON("https://webaim.org/resources/contrastchecker/?fcolor=" + fColor + "&bcolor=" + bColor + "&api", function(data) {
					/* Storing the pass/fail result as a variable */
					let result = data.AALarge;
					console.log("Question 3 background colour that the 'wrong' button is checking is " + bColor + ".");
					console.log("Question 3 text colour that the 'wrong' button is checking is " + fColor + ".");
					/* Displaying the pass-wrong-answer block if the result is a pass and you answered wrong */
					console.log("Question 3 result is " + result + ".");
					if (result === "pass") {
						$("#pass-wrong-answer").css("display", "block");
						console.log("Showing question 3 " + result + " result.");
						setTimeout(function() {
							$("#pass-wrong-answer").css("display", "none");
						}, 2000);
					/* Displaying the fail-wrong-answer block if the result is a fail and you answered wrong */
					} else if (result === "fail") {
						$("#fail-wrong-answer").css("display", "block");
						console.log("Showing question 3 " + result + " result.");
						setTimeout(function() {
							$("#fail-wrong-answer").css("display", "none");
						}, 2000);
					}
				});
			})
			advanceTo4();
		})
	}

	function advanceTo4() {
		setTimeout(function() {
			$(".three").css("display", "none");
		}, 3000);
	}

	function advanceTo5() {
		setTimeout(function() {
			$(".four").css("display", "none");
		}, 3000);
	}

	function advanceTo6() {
		setTimeout(function() {
			$(".five").css("display", "none");
		}, 3000);
	}

	function advanceTo7() {
		setTimeout(function() {
			$(".six").css("display", "none");
		}, 3000);
	}

	function advanceTo8() {
		setTimeout(function() {
			$(".seven").css("display", "none");
		}, 3000);
	}

	function advanceTo9() {
		setTimeout(function() {
			$(".eight").css("display", "none");
		}, 3000);
	}

	function advanceTo10() {
		setTimeout(function() {
			$(".nine").css("display", "none");
		}, 3000);
	}







	var init = function(){ // Here, I am calling all the functions I wrote above.
		console.log('Initializing app.');
	};

	return {
		init: init
	};
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);



