function iterateAndSave(num) {
  const resultArr = [];
  let iterations = 0;

  while (iterations < 10) {
    num += 2;
    resultArr.push(num);
    iterations++;
    
    if (num === iterations) {
      console.log("Execution interrupted");
      break;
    }
  }

  return resultArr;
}

// Example usage:
const num = -2;
const result = iterateAndSave(num);
console.log(result);