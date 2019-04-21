const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let amountOfCases = null,
    d = null,
    tokens = null,
    caseNumber = 0;

rl.on('line', function(line) {
	if (!amountOfCases) {
		amountOfCases = Number(line);
		return true;
	} else if (!d) {
	    d = Number(line);
	    return true;
	} else {
	    tokens = line.split('');
	}
	solve(++caseNumber, d, tokens);
	d = null;
	tokens = null;
	if (caseNumber === amountOfCases) process.exit();
});

function solve(caseNumber, d, tokens) {
    let newArr = Array(tokens.length).fill('0');
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "S") {
            newArr[i] = "E";
        } else {
            newArr[i] = "S";
        }
    }
    let result = newArr.join('');
    console.log(`Case #${caseNumber}: ${result}`);
}