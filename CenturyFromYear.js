//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 1:
function century(year) {
  if(year%100 != 0){
    return Math.floor(year/100 + 1);
  }else{
    return year/100;
  } 
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 2:
onst century = year => Math.ceil(year/100)
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
