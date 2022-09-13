function numberInputted() {
console.log(document.getElementById("decimalNumberHTML").value)
    var decimalNumber = document.getElementById("decimalNumberHTML").value

decimalNumber = parseInt(decimalNumber)
//code for tranfering decimal to hexadecimal.
//hexadecimal:
let hexNumber = decimalNumber.toString(16);
document.getElementById("hexNumberHTML").innerHTML = hexNumber
//code for tranfering decimal to binary.
//binary:
var binaryNumber = decimalNumber.toString(2);
document.getElementById("binaryNumberHTML").innerHTML = binaryNumber

}