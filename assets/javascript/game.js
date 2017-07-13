//Variables
var y = 0
var x = 0
var myValue = 0;
var totalScore =0;
var wins = 0;
var losses = 0;
//radomizer to pick the random number that the player is trying to get too
function radomizer(){
console.log(x);
x = Math.floor((Math.random() * 110) + 10);
console.log(x);
$("#number").html("<h3>" + x + "</h3>")
}
	radomizer();

//set up value of crystals ranomizer numbers 1 - 12
/*function randomizer(){
console.log(y);
	for (var i = 0; i < 4; i++) {
		y = Math.floor((Math.random() * 11) + 1);
		console.log(y);
		$("#jewls").attr("value") = y
	}
}
randomizer();*/

/*Function for getting the numbers from the gems and adding up the total 
as well as counting wins and losses and allerting the palyer that they won*/ 
$(document).on("click", "button",someFunction);
function someFunction(){
	//console.log("you clicked the ");
	myValue = $(this).attr("value");
	//console.log("here is this " + this + " and here is the value " + myValue)
	totalScore += +myValue;
	$("#score").html(totalScore);

	if (totalScore > x ) {
		alert("You Lose!");
		losses ++;
		$("#loses").html("Losses: " + losses);		console.log(wins)
		totalScore = 0;
		myValue = 0;
		(radomizer()).reset();

	}
	if (totalScore === x){
		alert("You Win!!!");
		wins ++;
		$("#wins").html("Wins:" + wins);
		console.log(losses)
		totalScore = 0;
		myValue = 0;
		(radomizer()).reset();
	}

}

