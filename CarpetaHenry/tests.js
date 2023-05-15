function generateShape(integer){
  let square = ''
  for( let i = 0 ; i < integer ; i++){
    for(let j = 0 ; j < integer ; j++){
      square += '+'
    }
    square += '\n'
  }
  return (square);
}

// Example usage:
const result = generateShape(20);
console.log(result);