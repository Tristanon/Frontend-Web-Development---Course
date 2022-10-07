//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 1:
function arrayPlusArray(arr1, arr2) {
  result = 0;
  for ( let i = 0; i < arr1.length; i++){
    result = result + arr1[i] + arr2[i];
  }
  return result;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 2:
function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//