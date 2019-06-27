
console.log("hello script js");
var ticket = 10;
var ticketPrice = 50;
var ticketSold = 0;


var inputHappened = function(currentInput){
  if( ticketSold < ticket){
     ticketSold += 1;
     
     console.log( "Number of tickets sold:" + ticketSold );
     sellTicket(ticketSold);
  } else {
    display("Tickets sold out!");
  };

function sellTicket(ticketSold){

   if(ticketSold < 5){ 
      var ticketLeft = 5 - ticketSold;

      display(`Your ticket costs $${ticketPrice}. There are ${ticketLeft} tickets left before price goes up.`);

      ticketPrice = ticketPrice * 103/100;
      ticketPrice= Number.parseFloat(ticketPrice).toFixed(2);

        console.log("Tickets is now sold at" + ticketPrice);
        

  } else if (ticketSold > 4 && ticketSold < 9){
      var ticketLeft = 9 - ticketSold;

      display(`Your ticket costs $${ticketPrice}. There are ${ticketLeft} tickets left before price goes up.`);

      ticketPrice = ticketPrice * 105/100;
      ticketPrice= Number.parseFloat(ticketPrice).toFixed(2);
        console.log("Tickets is now sold at" + ticketPrice);
        

  } else if (ticketSold == 9){

      display(`Your ticket costs $${ticketPrice}.There is only 1 ticket left .`);
      ticketPrice = 91000;
        console.log("Tickets is now sold at" + ticketPrice);
        

  } else {
    console.log('Last ticket sold');
  }
 }
}
