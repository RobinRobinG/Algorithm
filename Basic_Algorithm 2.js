Algorithm 2 - Assignment

Part 1

Problem #1
function multiply(x,y){
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);
Predicted output: 2,3

#2
function multiply(x,y){
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));
Predicted output: 6,10

#3
var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}
Predicted output: 3,4,5,6,7

#4 
var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);
Predicted output: 15, 15, 10, 15

#5
for(var i=0; i<15; i+=2){
   console.log(i);
}
Predicted output: 0,2,4,6,8,10,12,14

#6
for(var i=0; i<3; i++){
   for(var j=0; j<2; j++){       
       console.log(i*j);
   }
}
Predicted output: 0,0,0,1,0,2

#7
function looping(x,y){
   for(var i=0; i<x; i++){
      for(var j=0; j<x; j++){         
          console.log(i*j);
      } 
   }
}
z = looping(3,3);
console.log(z);
Predicted output: 0,0,0,0,1,2,0,2,4

#8
function looping(x,y){
   for(var i=0; i<x; i++){
      for(var j=0; j<y; j++){         
         console.log(i*j);
      } 
   }
   return x*y;
}
z = looping(3,5);
console.log(z);
Predicted output: 0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15

Part 2 

#1 Print 1 to x
function printUpTo(x){
  // your code here
  if(x > 0){
    for(var i = 1; i <= x; i++){
      console.log(i);
    } 
  }
  else{
    return false;
  }
}
printUpTo(1000000); // should print all the integers from 1 to 1000000
y = printUpTo(-10); // should return false
console.log(y); // should print false

#2 PrintSum
function printSum(x){
  var sum = 0;
  //your code here
  for(let i = 0; i < 256; i++){
    console.log(i);
    sum += i;
    console.log(sum);
  }
  return sum
}
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32640


#3 PrintSumArray
function printSumArray(x){
  var sum = 0;
  for(var i=0; i<x.length; i++) {
    //your code here
    sum += x[i];

  }
  return sum;
}
console.log( printSumArray([1,2,3]) ); // should log 6








