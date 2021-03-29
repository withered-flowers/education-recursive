function factorial(inputNumber) {
  // base case
  // input number berkurang terus sampai dengan ... 1 bukan maka?
  if(inputNumber === 0) {
    return 1;
  }

  // perhitungannya sekaligus rekursifnya
  return inputNumber * factorial(inputNumber - 1);
}

console.log(factorial(5));