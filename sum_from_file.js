const fs = require('fs');

const sumFile = (fileName) => {
  let sum = 0;
  const fileContent = fs.readFileSync(fileName, 'utf8').split('\n');
  fileContent.forEach((num) => {
    if (num[0] !== "#") {
      sum += Number(num);
    }
  });

  return sum;
}
