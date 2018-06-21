const duplicates = (array) => {
  let elCounter = {};
  let duplicates = [];

  array.forEach((el) => {
    if (elCounter[el]) {
      duplicates.push(el);
    } else {
      elCounter[el] = 1;
    }
  })

  return duplicates;
}

console.log(duplicates([1,2,1,4])) // => [1]
console.log(duplicates([])) // => []
console.log(duplicates(["hey", "you", 4, "gonna be a big A", 'potato'])) // => []
