function fibonacciSequence(inputNumber) {
  // base case
  if(inputNumber < 2) {
    return inputNumber;
  }

  // recursive call
  return fibonacciSequence(inputNumber - 1) + fibonacciSequence(inputNumber - 2);
}

console.log(fibonacciSequence(8));