//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 1:
function solution(str){
  list = str.split("");
  reverse = '';
  let j = 0
  for (let i = str.length -1; i >= 0;i--){
    reverse = reverse + str[i];
  }
  return reverse
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 2:
function solution(str){
  return str.split('').reverse().join('');  
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
