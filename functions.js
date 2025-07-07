/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
 * I: an array of animals and a name string
 * O: returns an animal object whose name matches the input name, if one exists in the input array, or null otherwise
 * C: N/A
 * E: case sensitive
 */
function search(animalArray, name) {
	//loop over each animal in the array
	for (let i = 0; i < animalArray.length; i++) {
		//check if this animal matches the search name
		if (animalArray[i].name === name) {
			//if so, return the animal
			return animalArray[i];
		}
	}
	//if completed the loop, then no animal in the array matches, so return null
	return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
 * I: an array of animals, a string name to search for, and a replacement animal object
 * O: no return value, but replaces the animal object with the given name, if present in the array, with the replacement object; otherwise does nothing
 * C: N/A
 * E: case sensitive
 */
function replace(animals, name, replacement) {
	//get animal object to replace, if any
	let toReplace = search(animals, name);
	
	//if no animal has the given name, toReplace is null and evaluates to false
	if (toReplace) {
		//use indexOf to find the index of the toReplace object, then use bracket notation to reassign that index to the replacement object
		animals[animals.indexOf(toReplace)] = replacement;
	}
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
 * I: an array of animals and a string name to remove
 * O: no return value, but removes an animal with a matching name, if any; otherwise does nothing
 * C: N/A
 * E: N/A
 */
function remove(animals, name) {
	//get animal object to delete, if any
	let toDelete = search(animals, name);

	//if no animal has the given name, toDelete is null and evaluates to false
	if (toDelete) {
		//use indexOf to find index of the toDelete object, then use the splice method to remove just the element at that index
		animals.splice(animals.indexOf(toDelete), 1);
	}
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
 * I: an array of animals and an animal object to add
 * O: no return value, but adds the animal object to the array iff it has a non-empty, unique name and a non-empty species
 * C: N/A
 * E: N/A
 */
function add(animals, animal) {
	//check if the animal object to be added has either an empty name or an empty species
	if (animal.name.length === 0 || animal.species.length === 0) {
		//if so, return without doing anything
		return;
	}

	//look for any duplicate names
	let duplicate = search(animals, animal.name);

	//if there is no name conflict, duplicate will be null (falsy), so !duplicate will be true so the if block will run
	if (!duplicate) {
		//if there is no duplicate, add the new animal object to the end of the animals array
		animals.push(animal);
	}
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
