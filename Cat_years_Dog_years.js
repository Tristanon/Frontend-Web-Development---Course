//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 1:
var humanYearsCatYearsDogYears = function(humanYears) {
  let list=[];
  let CatYears = 0;
  let DogYears = 0;
  list.push(humanYears);
  for (let i = 1; i < humanYears + 1; i++){
    if (i == 1){
      CatYears = 15;
      DogYears = 15;
    }else if(i == 2){
      CatYears = CatYears + 9;
      DogYears = DogYears + 9; 
    }else{
      CatYears = CatYears + 4;
      DogYears = DogYears + 5;
    }
  }
  list.push(CatYears);
  list.push(DogYears);
  return list;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 2:
var humanYearsCatYearsDogYears = function(humanYears) {
  if (humanYears == 0){ return [0,0,0]}
  if (humanYears == 1){ return [1,15,15]}
  if (humanYears == 2){ return [2,24,24]}
  if (humanYears > 2){ return [humanYears,24+4*(humanYears-2),24+5*(humanYears-2)]}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//
