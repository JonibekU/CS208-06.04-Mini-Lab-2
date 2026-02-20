function printSum(x, y) {
  const numX = parseFloat(x);
  const numY = parseFloat(y);

  const xIsNaN = isNaN(numX);
  const yIsNaN = isNaN(numY);

  if (!xIsNaN && !yIsNaN) {
    console.log(`Sum is ${numX + numY}.`);
  } 
  else if (xIsNaN && yIsNaN) {
    console.log(`'${x}' and '${y}' are not numbers.`);
  } 
  else if (xIsNaN) {
    console.log(`'${x}' is not a number.`);
  } 
  else {
    console.log(`'${y}' is not a number.`);
  }

}

export default printSum;