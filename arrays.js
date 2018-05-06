var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(element, array) {
  return [array, ...element]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
 array.unshift(element)
 return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.
}

function removeElementFromEndOfArray(array) {
  return [array.slice(0)]
}

function accessElementInArray(array, index) {
  array.indexOf(index)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
 return [array.shift(element)]
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  return [array.pop(element)]
}
