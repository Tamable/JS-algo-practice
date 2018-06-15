// Write a function which returns the first n elements from the Fibonacci sequence.

const fibs = (n) => {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1]
  }

  let seq = fibs(n-1);
  let nextNum = seq[seq.length -2] + seq[seq.length - 1];
  seq.push(nextNum);

  return seq;
}

console.log(fibs(0)) // => []
console.log(fibs(1)) // => [0]
console.log(fibs(2)) // => [0, 1]
console.log(fibs(3)) // => [0, 1, 1]
console.log(fibs(4)) // => [0, 1, 1, 2]
