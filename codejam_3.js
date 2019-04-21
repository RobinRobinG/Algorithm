const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let amountOfCases = null;
let caseNumber = 0;
let N = null;
let L = null;
let tokens = null;

rl.on('line', function(line) {
	if (!amountOfCases) {
		amountOfCases = Number(line);
		return true;
	} else if (!L) {
	    let line1 = line.split(' ');
	    N = Number(line1[0]);
		L = Number(line1[1]);
		return true;	    
	} else {
	    tokens = line.split(' ').map(Number);
	}
	solve(++caseNumber, N, L, tokens);
    L = null;
    tokens = null;
	if (caseNumber === amountOfCases) process.exit();
});

function gcd(a, b) {
    if (b > a) {
        let temp = a; 
        a = b; 
        b = temp;
    }
    while (true) {
        if (b === 0) return a;
        a %= b;
        if (a === 0) return b;
        b %= a;
    }
}

function solve(caseNumber, N, L, tokens) {
    let primes = [];
    for (let i = 0; i < tokens.length - 1; i++) {
        primes.push(gcd(tokens[i], tokens[i+1]));
    }
    let first = tokens[0] / primes[0];
    let last = tokens[tokens.length - 1] / primes[primes.length - 1];
    primes.unshift(first);
    primes.push(last);
    let uniquePrimes = [...new Set(primes)];
    let sortedPrimes = uniquePrimes.sort((a, b) => a - b);
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let letters = alphabet.split('');
    let lettersHash = {};
    for (let i = 0; i < letters.length; i++) {
        lettersHash[sortedPrimes[i]] = letters[i];
    }
    let text = [];
    for (let i = 0; i < primes.length; i++) {
        text.push(lettersHash[primes[i]]);
    }
    let result = text.join('');
    console.log(`Case #` + caseNumber.toString() +`: ` + result);
}