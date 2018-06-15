// Sum the digits of a positive integer to form the digital root. The resulting root, should be a single digit (0..9).

const digitalRoot = (num) => {
  while (num > 9) {
    num = sumDigits(num);
  }

  return num;
}

const sumDigits = (num) => {
  let sum = 0;

  while (num > 0) {
    sum += (num % 10);
    num = Math.floor(num / 10);
  }

  return sum;
}


console.log(digitalRoot(1)) // => 1
console.log(digitalRoot(22)) // => 4
console.log(digitalRoot(58)) // => 4
