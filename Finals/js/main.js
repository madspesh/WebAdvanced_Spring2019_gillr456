/* Code starts here */

var app = app || {};

app.main = (function() {
	console.log('Your code starts here!');




	/* UI Button Functions */

	$("#close-button").click(function() {
		$(".info-overlay").animate({right: '-80vw'});
	});

	$("#go-button").click(function() { // Doesn't work for replay button?
		$(".final-overlay").css("display", "none");
		$(".info-overlay").animate({right: '-80vw'});
		nextQuestion();
	});

	$("#info-button").click(function() {
		$("#go-button").remove();
		$(".info-overlay").animate({right: '0'});
	});

	$("#retweet-button").click(function() {
		// Add link to Twitter sharing once site is live.
	});





	/* Timebar */

	function loadTimebar() {
		changeTimebarColour();
		$("#timebar-loader").animate({ // Timebar loads for 5 seconds.
			width: '100%',
		}, 5000, function () {
			$(this).removeAttr('style'); // Timebar resets after animation finishes.
		});
	}

	function changeTimebarColour() {
		setTimeout(function() {
			$("#timebar-loader").css("background", "#ED4141")
		}, 3000)
	}





	/* Scoreboard and Final Result */

	var x = 0;

	function loadResult() {
		$(".final-overlay").css("display", "block");
		var sentiment;
		if (x >= 10) {
			sentiment = "perfect score!";
		} else if (x == 8 || x == 9) {
			sentiment = "great job!";
		} else if (x == 6 || x == 7) {
			sentiment = "not bad!";
		} else if (x == 4 || x == 5) {
			sentiment = "pretty average...";
		} else if (x == 2 || x == 3) {
			sentiment = "better luck next time!";
		} else if (x == 1 || x == 0) {
			sentiment = "did you even try?!";
		}
		console.log("Final result is " + x + " and sentiment is " + sentiment);
		$("#custom-message").html("You scored " + x + " out of 10 - " + sentiment);
	}




	/* Advancing to next question */

	var i = -1;

	function nextQuestion() {
		$("#score-user").html(x);
		if (i < 9) { // Looping through the 10 questions stored in my questions.json file.
			i++;
			loadTimebar();
			loadQuestion();
			setTimeout(function() {
				nextQuestion();
				$('#agree, #disagree').unbind('click'); // This removes the previous question's click event.
			}, 5000);
		} else if (i = 9) {
			loadResult();
		}
	}




	/* Loading question and checking answers against API */

	function loadQuestion() {

		$.getJSON("js/questions.json", function(data){

			var bColor = data["questions"][i].backgroundcolor;
			var fColor = data["questions"][i].color;

			$(".quiz-question").css("background", "#" + bColor );
			$(".quiz-question").css("color", "#" + fColor );
			$(".quiz-question").css("box-shadow", "0.1em 0.1em #" + fColor );

			var hideWrong = function () { $("#wrong").css("display", "none"); };
			var hideCorrect = function () { $("#correct").css("display", "none"); };

			$("#agree").click(function() {

				$.getJSON("https://webaim.org/resources/contrastchecker/?fcolor=" + fColor + "&bcolor=" + bColor + "&api", function(data) {
		
					var result = data.AALarge;
					var ratio = data.ratio;
					console.log("Result is " + result);

					if (result === "pass") {
						$("#score-user").html( x++ ); // Adding 1 to the scoreboard for every correct answer.
						$("#correct").css("display", "table");
						$(".message-text").html("Correct! The ratio is " + ratio);
						setTimeout(hideCorrect, 2000, "#correct") // Shows the correct message for 2 seconds.
					} else if (result === "fail") {
						$("#wrong").css("display", "table");
						$(".message-text").html("Wrong... The ratio is " + ratio);
						setTimeout(hideWrong, 2000, "#wrong") // Shows the wrong message for 2 seconds.
					}
				});
			});

			$("#disagree").click(function() {

				$.getJSON("https://webaim.org/resources/contrastchecker/?fcolor=" + fColor + "&bcolor=" + bColor + "&api", function(data) {
					
					var result = data.AALarge;
					var ratio = data.ratio;

					console.log("Result is " + result);

					if (result === "pass") {
						$("#wrong").css("display", "table");
						$(".message-text").html("Wrong... The ratio is " + ratio);
						setTimeout(hideWrong, 2000, "#wrong") // Shows the wrong message for 2 seconds.
					} else if (result === "fail") {
						$("#score-user").html( x++ ); // Adding 1 to the scoreboard for every correct answer.
						$("#correct").css("display", "table");
						$(".message-text").html("Correct! The ratio is " + ratio);
						setTimeout(hideCorrect, 2000, "#correct") // Shows the correct message for 2 seconds.
					}
				});
			});
		});
	}





	var init = function(){
		console.log('Initializing app.');		
	};

	return {
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);