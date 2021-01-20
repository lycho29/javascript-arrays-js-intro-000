var chocolateBars = [
  'snickers', 
  'hundred grand',
  'kitkat',
  'skittles'
  ];


function addElementToBeginningOfArray (array, element) {
 return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return destructivelyRemoveElementFromBeginningOfArray;
}

function removeElementFromBeginningOfArray() {
  
  return removeElementFromBeginningOfArray;
}
removeElementFromBeginningOfArray.slice(1);