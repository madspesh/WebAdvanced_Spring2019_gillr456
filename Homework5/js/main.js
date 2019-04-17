/* Your JS starts here */


$(document).ready(function() { // When my page loads, I want to trigger the following:



	/* Function to translate RGB colour to HEX colour */
	function rgb2hex(orig){
	 var rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
	 return (rgb && rgb.length === 4) ? "" +
	  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
	  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
	  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : orig;
	}

	/* Storing my text colour as a variable */
	var fColor = rgb2hex($('.question').css('color'));
	console.log("Text colour is " + fColor);

	/* Storing my background colour as a variable */
	var bColor = rgb2hex($('.question').css('background-color'));
	console.log("Background colour is " + bColor);



	/* Calling the yes click function */
	$("#yes").click(function() { // When I click the thumbs up icon:

		/* Inserting my fColor and bColor variables into the API url */
		$.getJSON("https://webaim.org/resources/contrastchecker/?fcolor=" + fColor + "&bcolor=" + bColor + "&api", function(data) {

			/* Storing the pass/fail result as a variable */
			var result = data.AALarge;

			/* Displaying the correct-answer block if the result is a pass */
			console.log(result);
			if (result === "pass") {
				$("#correct-answer").css("display", "block");
				$("#large-text").css("display", "none");
			} else if (result === "fail") {
				// Need to design the wrong-answer block for fail results.
			}
		})
	})



		/* Calling the no click function */
	$("#no").click(function() { // When I click the thumbs up icon:

		/* Inserting my fColor and bColor variables into the API url */
		$.getJSON("https://webaim.org/resources/contrastchecker/?fcolor=" + fColor + "&bcolor=" + bColor + "&api", function(data) {

			/* Storing the pass/fail result as a variable */
			var result = data.AALarge;

			/* Displaying the wrong-answer block if the result is a pass */
			console.log(result);
			if (result === "pass") {
				$("#wrong-answer").css("display", "block");
				$("#large-text").css("display", "none");
			} else if (result === "fail") {
				// Need to design the wrong-answer block for fail results.
			}
		})
	})



})





