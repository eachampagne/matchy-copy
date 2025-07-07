/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = "cat";
animal["name"] = "Mortimer";
animal.noises = [];

console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = "purr";
noises.push("mew");
noises.unshift("meow");
noises[noises.length] = "hiss";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal.noises = noises;
animal.noises.push("miao"); //apparently this cat speaks Italian
//look I was running out of plausible cat sounds
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * Dot notation with literal keys (object.key)
 * Bracket notation with literal keys (object["key"]) or variable keys (object[key])
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * Bracket notation with numerical indices (or variables of type Number):
 * array[0], array[array.length - 1], etc
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);
console.log(animal);
var duck = {
	species: 'duck',
	name: 'Jerome',
	noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
console.log(animals);

var horse = {
	species: 'horse',
	name: 'Night Wind',
	noises: ['neigh', 'whinny']
}
animals.push(horse);

var piplup = {
	species: 'piplup',
	name: 'Prismarine',
	noises: ['squawk', 'splash']
}
animals.push(piplup);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I choose to represent the friends list as an array because arrays are well suited to storing lists of related items

var friends = [];

function getRandom(array) {
	return Math.floor(Math.random() * array.length);
}

friends.push(animals[getRandom(animals)].name);
console.log(friends);

animals[0].friends = friends;

console.log(animals[0]);
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
