function destroyer(arr) {
  var args = [...arguments]; //this turns the arguments object into a real array
  return arr.filter(i=> {
    return args.indexOf(i) === -1;
  })

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));



/*
Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/
