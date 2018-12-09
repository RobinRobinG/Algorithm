//Greatest common factor (GCF)
GCF = function(num1, num2){
  if (num1 === num2){
    return num1;
  } else if (num1 > num2) {
    return GCF(num1-num2, num2);
  } else {
    return GCF(num2-num1, num1);
  }
}
console.log(GCF(2,1))

//Recursive Signma 
//write a recursive function that given a number returns sum of intergers from 1 to that number.
rSigma = function(num) {
  if (num === 1){
    return 1;
  } else {
    return num + rSigma(num-1);
  }
  console.log(rSigma(3))

//Recursive Factorial
rFact = function(num) {
    if(num <= 0 ) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return num * rFact(num-1);
    }
}
console.log(rFact(3))

//////
