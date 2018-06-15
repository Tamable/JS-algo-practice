// Write a function that takes a string and compress it.
// Case matters. (ex. "aa" => "a2", "aA" => "aA")
// Do not compress a character if there is only one in a row.

const compress = (str) => {
  let count = 0;
  let strArr = [];

  for (let i = 0; i < str.length; i++) {
    count += 1

    if (str[i] !== str[i+1]) {
      strArr.push(str[i]);
      if (count > 1) {
        strArr.push(count);
      }
      count = 0;
    }

  }

  return strArr.join('');
}

console.log(compress('aaa')) // => 'a3'
console.log(compress('abbccc')) // => 'ab2c3'
