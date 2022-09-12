function numberInputted() {
console.log(document.getElementById("decimalNumberHTML").value)
    var decimalNumber = document.getElementById("decimalNumberHTML").value

decimalNumber = parseInt(decimalNumber)
//hexadecimal:
let hexNumber = decimalNumber.toString(16);
document.getElementById("hexNumberHTML").innerHTML = hexNumber

//binary:
var binaryNumber = decimalNumber.toString(2);
document.getElementById("binaryNumberHTML").innerHTML = binaryNumber

}