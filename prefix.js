prefix_calculator = function(string) {
    let tokens = string.split('');
    console.log(tokens);
    // return something like ['+', '-', '2', '4', '3']
    let operator = {'+': (a, b) => a + b, 
                    '-': (a, b) => a - b}
    let operator_stack = []; // first in Last out, last in first out
    let number_stack = [];
    let count = 0;

    while (tokens.length > 0) {
      let token = tokens.shift();
      if (operator[token]) {
        operator_stack.push(token);
        count = 0;
      } else {
      number_stack.push(token);
      count ++;
      if (count == 2) {
        let current_operator = operator_stack.pop();
        let current_number1 = number_stack.pop();
        let current_number2 = number_stack.pop();
        number_stack.push(operator[current_operator](parseInt(current_number2), parseInt(current_number1)));
        count ++;
      }
    }
  }
  while (operator_stack.length > 0) {
    let current_operator = operator_stack.pop();
    let current_number1 = number_stack.pop();
    let current_number2 = number_stack.pop();
    number_stack.push(operator[current_operator](parseInt(current_number2), parseInt(current_number1)));
  }

  return number_stack[0];
}

console.log(prefix_calculator('+-+694+59'));
