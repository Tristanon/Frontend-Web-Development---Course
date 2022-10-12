//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 1:
function capitalize(s){
  let arr1 = [];
  let arr2 = [];
  result = [];
  for (let i = 0; i < s.length; i ++){
    if ( i%2 == 0 ) {
      arr1.push(s[i].toUpperCase());
      arr2.push(s[i]);
    }else{
      arr2.push(s[i].toUpperCase());
      arr1.push(s[i]);
    }
  }
  let str1 ='';
  let str2 ='';
  for (let i =0; i < s.length; i++){
    str1 += arr1[i];
    str2 += arr2[i];
  }
  result.push(str1,str2);
  return result;
};
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 2:
