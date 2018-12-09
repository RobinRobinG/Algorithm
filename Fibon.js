//Fibon
Fibon = function(num) {
  if(num === 0 || num === 1) {
    return 1;
  } else {
    return Fibon(num - 1) + Fibon(num - 2);
  }
}
console.log(Fibon(6));

//Fibon: Memorized Solution
Fibon_Memorized = function(num, memo) {
  const memo = [];
  if (memo[num]) {
    return memo[num];
  }
  if (num === 0 || num === 1) {
    return 1;
  } else {
    let result = Fibon((num - 1), memo) + Fibon((num - 2), memo);
    memo[num] = result;
    return result;
  }
}

//Zibon
Zibon = function(num){
  if(num === 0 || num === 1 ) {
    return 1;
  } else if(num === 2){
    return 2;
  } else {
    if (num % 2 === 0) {
      return Zibon(num/2)+ Zibon((num/2)+1) + 1;
    } else {
      return Zibon((num-1)/2) + Zibon((num-1)/2 - 1) + 1;

    }
  }
}
console.log(Zibon(2467));
