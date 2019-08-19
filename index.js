
function dwarfRollCall(dwarves) {
  var dwarves = [ "Dopey", "Grumpy", "Bashful"]
  var dwarfNames = "";
	for(var i = 0; i < dwarves.length; i++) {
		if(i === dwarves.length+1) {
			dwarfNames += (i+1 + ". " + dwarves [i]);
		}else {
			dwarfNames += (i+1 + ". " + dwarves [i] + " ");
		}
	}
	return dwarfNames;
}




function summonCaptainPlanet(pltcaalls) {
  var calls = ["apple", "banana", "orange"];
	return calls.map(function(pltcaalls) {
		return pltcaalls.toUpperCase() + "!";
	});
}



function longPlaneteerCalls(words) {
  var longCalls = ["Earth", "Wind", "Fire", "Heart", "Water"];
for(var i = 0; i < words.length; i++) {
    if(words[i].length > 4) {
 			return true
 	}
 }
 	return false
 }



function findTheCheese (foods) {
var snacks = ["crackers", "gouda", "thyme"]
var ingredients = ["garlic", "rosemary", "bread"]
var cheese = ["camembert", "cheddar", "gouda"];
 for(var i = 0; i < foods.length; i++) {
   for(var j = i; j < cheese.length; j++){
     if(foods[i] === cheese[j]) {
       return cheese[j];
     }
   }
 }
 return "no cheese!";
}
