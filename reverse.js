// Write a function that reverses the characters in a string.

const reverse = (str) => {
  let strArr = str.split('');

  for (let i = 0; i < (str.length / 2); i++) {
    let rightIdx = str.length - 1 - i;
    let temp = strArr[i];
    strArr[i] = strArr[rightIdx];
    strArr[rightIdx] = temp;
  }

  return strArr.join('');
}

console.log(reverse('abcdefg'))
