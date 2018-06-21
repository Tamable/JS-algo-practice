
function letterCombinations(str) {
  let result = [];
  recurse(str, "", result);
  return result;
}

function recurse(digitStr, path_so_far, resultArr) {
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

  if (!digitStr) {
    resultArr.push(path_so_far);
    return
  }

  first = digitStr[0]
  remaining = digitStr.slice(1);

  let letters = keyPad[Number(first)];

  for (let i = 0; i < letters.length; i++) {
    console.log(letters[i])
    recurse(remaining, path_so_far + letters[i], resultArr)
  }
}

console.log(letterCombinations('45'))
