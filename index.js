
/**
Problem Statement:

Given an Integer, you need to compute the factorial of given number using recursion
*/ 

const n_factorial = (n) => {
  if(n === 1) return 1;
  return n * n_factorial(n-1)
}

console.log("productof 5 is ",n_factorial(5))