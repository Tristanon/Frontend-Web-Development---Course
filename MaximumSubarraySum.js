//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 1:
var maxSequence = function(arr){
  let greatestSum = 0;
  let currSum = 0;
  
  for (let i = 0; i < arr.length; i ++ ){
    if (greatestSum < arr[i] + currSum){
      currSum = currSum + arr[i];
      greatestSum = currSum;
    } else if (greatestSum < arr[i]){
      greatestSum = arr[i];
      currSum = arr[i];
    } else{
      currSum = currSum + arr[i] > 0? currSum + arr[i] : 0;
      if (greatestSum < currSum){
        greatestSum = currSum;
      }
    }
  }
  return greatestSum;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//
