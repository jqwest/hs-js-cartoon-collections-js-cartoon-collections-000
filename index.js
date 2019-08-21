var dwarves = [ "Dopey", "Grumpy", "Bashful"]
var dwarfNames = "";
function dwarfRollCall(dwarves) {
	for(var i = 0; i < dwarves.length; i++) {
		if(i === dwarves.length+1) {
			dwarfNames += (i+1 + ". " + dwarves [i]);
		}else {
			dwarfNames += (i+1 + ". " + dwarves [i] + " ");
		}
	}
	return dwarfNames;
}



var calls = ["apple", "banana", "orange"];
function summonCaptainPlanet(pltcaalls) {
	return calls.map(function(pltcaalls) {
		return pltcaalls.toUpperCase() + "!";
	});
}


var longCalls = ["Earth", "Wind", "Fire", "Heart", "Water"];
function longPlaneteerCalls(words) {
for(var i = 0; i < words.length; i++) {
    if(words[i].length > 4) {
 			return true
 	}
 }
 	return false
 }


var snacks = ["crackers", "gouda", "thyme"]
var ingredients = ["garlic", "rosemary", "bread"]
var cheese = ["camembert", "cheddar", "gouda"];
function findTheCheese (foods) {
 for(var i = 0; i < foods.length; i++) {
   for(var j = i; j < cheese.length; j++){
     if(foods[i] === cheese[j]) {
       return cheese[j];
     }
   }
 }
 return "no cheese!";
}
