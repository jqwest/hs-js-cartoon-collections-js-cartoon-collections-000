//create an array of dwarf names
// return a string with numbered dwarves
function dwarfRollCall(dwarves) {
	var dwarves = [ "Dopey", "Grumpy", "Bashful"]
	var dwarfNames = "";
  //empty variable for new string of names
	for(var i = 0; i < dwarves.length; i++) {
//create a new var i and set i to 0 - i is less than dwarves - run until false)
    if(i === dwarves.length+1) {
// if i is equal to dwarves.length+1
		}
			dwarfNames += (i+1 + ". " + dwarves [i] + " ");
	}
	return dwarfNames;
}



function summonCaptainPlanet(planeteerCalls) {
// create an array with variables
//convert each elemetn to uppercase and add an !
// reutrn value as an array
		var calls = ["apple", "banana", "orange"];
		return calls.map(function(planeteerCalls) {
			return planeteerCalls.toUpperCase() + "!";
		});
	}





function longPlaneteerCalls(calls) {
	var longCalls = ["Earth", "Wind", "Fire", "Heart", "Water"];
//create variable with calls
//make a for loop to run the variables to determine the lenght of each string
	for(var i = 0; i < calls.length; i++) {
//if any word is longer than four characters return true
		if (calls[i].length > 4) {
			return true
		}
	}
	//if any word is shorter than four characters return false
return false
}


function findTheCheese(foods) {
//create an array of strings
// loop through strings
// retrun the first stirng that is a cheese

var cheese = ["cheddar", "gouda", "camembert"]
var ingredients = ["garlic", "cheddar", "bread"];
	 for(var i = 0; i < foods.length; i++) {
     if(foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembert') {
      return foods[i];
       }
     }
     if(foods !== 'cheddar' || foods !== 'gouda' || foods !== 'camembert') {
       return 'no cheese!';
     }
 }
