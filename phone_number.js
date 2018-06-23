
function letterCombinations(str) {
  const keyPad = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  let subResult = [];
  let result = [];

  function recurse(i) {
    if (i === str.length) {
      return result.push(subResult.join(''));
    }

    let letters = keyPad[Number(str[i])];

    for (let j = 0; j < letters.length; j++) {
      subResult.push(letters[j]);
      recurse(i+1);
      subResult.pop();
    }
  }

  recurse(0);
  return result;
}

console.log(letterCombinations('45'))
console.log(letterCombinations('567'))
