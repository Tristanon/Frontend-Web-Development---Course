//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 1:
function maxNumber(n){
  array = n.toString().split('').sort().reverse();
  result = '';
  for (let i = 0; i < array.length ; i++){
    result = result + array[i];
  }
  return parseInt(result);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 2:
function maxNumber(n){
  return Number(String(n).split('').sort().reverse().join(''))
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//
