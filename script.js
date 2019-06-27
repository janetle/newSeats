console.log("hello script js");
var ticket = 10;
var ticketPrice = 50;
var ticketSold = 0;


var inputHappened = function(currentInput){
	ticketSold += 1;
   console.log( "Number of tickets sold:" + ticketSold );
   display(`Your ticket costs $${ticketPrice}`);
   ticketPrice = ticketPrice * 105/100;
   console.log("Tickets is now sold at" + ticketPrice);
};
