function addElementToBeginningOfArray (arr, elem) {
  return [elem, ...arr];
}

function destructivelyAddElementToBeginningOfArray (arr, elem) {
  arr.unshift(elem);
  return arr;
}

