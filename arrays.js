function addElementToBeginningOfArray(arr, elem) {
  return [elem, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem);
  return arr;
}

function addElementToEndOfArray(arr, elem) {
  return [...arr, elem];
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  arr.push(elem);
  return arr;
}

function accessElementInArray(arr, i) {
  return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  arr.shift();
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(array) {
  return arr.slice(0, (array.length - 1));
}

function removeElementFromBeginningOfArray(array) {
  return arr.slice(1);
}
