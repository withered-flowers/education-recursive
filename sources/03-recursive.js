function printNumberRecursive(number) {
  // base case
  if(number === 0) {
    return;
  }
  // logic
  console.log(number);

  // recursive
  printNumberRecursive(number-1);
}

printNumberRecursive(5);