// Write a method that takes a string and returns whether the input is a valid IPv4 address (anything between 0.0.0.0 and 255.255.255.255).

const validIp = (str) => {
  let numArr = str.split('.');
  let uniq = Array.from(new Set(numArr));

  if (numArr.length !== 4) {
    return false;
  } else if (uniq.length !== 1) {
    return false;
  } else if (uniq[0] < 0 || uniq[0] > 255) {
    return false;
  }

  return true;
}

console.log(validIp('0.0.0.0'))
console.log(validIp('17.17.17.17'))
console.log(validIp('2.2.2'))
