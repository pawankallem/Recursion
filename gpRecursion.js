/*
GP & Recursion
lets learn about GEOMETRIC PROGRESSION: 

Assume, you are given 
S = 1 + (1/r) + (1/r^2) + 1/r^3) + ... + (1/r^n);

You will be given two integers n & r 
Your task is to calculate the sum S by writing a recursive function.

Input: 
1. 1 1
2. 3 5

Output: 
1. 2.0000
2. 1.2480
*/ 

function runProgram(input) {
	input = input.trim().split('\n');
	let [n,r] = input[0].trim().split(" ").map(Number);
	console.log(gp(n,r).toFixed(4))
}
let gp=(n,r)=>{
    if(n <= 0 ) return 0;
    return 1/r**n + gp(n-1,r);
    
}

runProgram( '3 5 ')

if (process.env.USERNAME === "") {
	runProgram(``);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
}


