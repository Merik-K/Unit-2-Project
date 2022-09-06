let decimalNumber = prompt("Enter the decimal number you want to be converted into hexidecimal and binary here:")
decimalNumber = parseInt(decimalNumber)
//hexadecimal:
hexDec = decimalNumber.toString(16);
console.log(hexDec)

//binary:
let binaryNumber = decimalNumber.toString(2);

console.log(binaryNumber)