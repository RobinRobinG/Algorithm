
// find square root of 2
function sqrootof2(){
  var x = 1; // create a new variable x;
  var min = 1;
  var max = 2;
  var tol = 0.01;
  while (x < 2) {
    if (Math.abs(2 - x * x) < tol) {
      return x;
    } else { 
      x = (max - min)/2 + min;
      if (x * x > 2){
        max = x; 
      }
      else {
        min = x;
      }
    }
  }
}

console.log(sqrootof2());



//Using Newton Raphson method
var x = 1.01; //x should be between 1 and 2.
var tol = 0.001;
var temp = 2.00 * x;
var count = 0;

while ((Math.abs(x - temp) > tol) && (count < 4)){
  temp = x;
  x = temp + (2 - temp * temp)/(2 * temp);
  count ++;
}
console.log(x);


function sqroot(a){
  var x = 1.01;
  var tol = 0.0001;
  var temp = 2.0 * x;
  var count = 0;
  while ((Math.abs(x - temp) > tol) && (count < 10)){
    temp = x;
    x = temp + (a - temp * temp)/(2 * temp);
    count ++;
  }
  return x;
}
console.log(sqroot(10));

function nthroot(a,n){
  var x = 1.01;
  var tol = 0.01;
  var temp = 0;
  var count = 0;
  while ((Math.abs(x - temp) > tol) && (count < 10)){
    temp = x;
    x = temp + (a - Math.pow(temp, n))/( n * Math.pow(temp, n-1));
    count ++;
  }
  return x;
}
console.log(nthroot(10,5.7));



