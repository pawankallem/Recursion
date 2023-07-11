
/** 
Problem Statement:

Given an Integer n, you need to compute the nth fibonacci number using following reccurence relation

F(n) = F(n-1) + F(n-2) ; n>1

F(n) = 1 ; n==1

F(n) = 0 ; n==0
*/

const nth_fibonacci = (n) => {
  if(n === 0) return 0;
  if(n === 1) return 1;
  return nth_fibonacci(n-1) + nth_fibonacci(n-2);
}

console.log("nth fibonacci number of 8 : ",nth_fibonacci(8))