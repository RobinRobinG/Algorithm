const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let amountOfCases = null,
    caseNumber = 0;

rl.on('line', function(line) {
	if (!amountOfCases) {
		amountOfCases = Number(line);
		return true;
	}
	const tokens = line.split('');
	solve(++caseNumber, tokens);
	if (caseNumber===amountOfCases) process.exit();
});

function solve(caseNumber, input){
    let M = Array(input.length).fill('0');
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "4") {
            input[i] = "2";
            M[i] = "2";
        }
    }
    let A = input.join('');
    let B = M.join('').replace(/^0+/, '');
    console.log(`Case #${caseNumber}: ${A} ${B}`);
}