//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 1:
function hero(bullets, dragons){
  if(bullets/2 >= dragons){
    return true;
  }else{
    return false;
  }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 2: 
function hero(bullets, dragons){
  return bullets/2 >= dragons? true:false;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
