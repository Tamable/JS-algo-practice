// Write a function that takes an array of integers and recursively computes the sum.
// Time complexity should be O(n).

const sumRec = (arr) => {
  if (arr.length < 1) {
    return 0;
  }

  return arr[0] + sumRec(arr.slice(1));
}

console.log(sumRec([]))
console.log(sumRec([10]))
console.log(sumRec([2, 4, 6, 8]))
