//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 1:
var summation = function (num) {
  result = 0;
  for(let i =0; i < num+1;i++){
    result += i ;
  }
  return result;
} 
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 2:
var summation = function (num) {
  return num * (num +1) / 2
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
