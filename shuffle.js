const shuffle = (array) => {
  arrCopy = Array.from(array);
  const len = arrCopy.length;

  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * (len));

    let temp = arrCopy[randomIdx];
    arrCopy[randomIdx] = arrCopy[i];
    arrCopy[i] = temp;
  }

  return arrCopy;
}

console.log(shuffle([1, 2, 3, 4, 5]))
