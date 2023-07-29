const board = new Array(10).fill().map(() => new Array(10).fill(0));
const followTheNight = (r,c,n) => {
  if(r < 0 || r >= 10 || c < 0 || c >= 10) return;
  if(n === 0) {
    board[r][c] = 1;
    return;
  }
  followTheNight(r+2,c+1,n-1);  
  followTheNight(r+2,c-1,n-1);  
  followTheNight(r-2,c+1,n-1);  
  followTheNight(r-2,c-1,n-1); 
  followTheNight(r+1,c+2,n-1); 
  followTheNight(r+1,c-2,n-1); 
  followTheNight(r-1,c+2,n-1); 
  followTheNight(r-1,c-2,n-1); 
}
let r = 1;
let c = 1;
let n = 2;
followTheNight(r-1,c-1,n)
let count = 0;
for(let i = 0; i < 10; i++) {
  for(let j = 0; j < 10; j++) {
    if(board[i][j] == 1) count++;
  }
}
console.log(count);