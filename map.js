const map = (array, callback) => {
  const result = [];

  array.forEach((el) => {
    result.push(callback(el));
  })

  return result;
}

const mapRec = (array, callback) => {
  const result = [];

  let idx = 0;
  const _pointerMap = () => {
    if (idx >= array.length) return;
    result.push(callback(array[idx]));

    idx++;
    _pointerMap();
  }

  _pointerMap();
  return result;
}

console.log(map([1, 2, 3, 4, 5], (n) => { return n * 2 }))
console.log(mapRec([1, 2, 3, 4, 5], (n) => { return n * 2 }))
