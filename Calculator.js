function numberInputted() {
var decimalNumber = document.getElementById(decimalNumberHTML)
decimalNumber = parseInt(decimalNumber)
//hexadecimal:
var hexDec = decimalNumber.toString(16);
console.log(hexDec)

//binary:
var binaryNumber = decimalNumber.toString(2);

console.log(binaryNumber)
}