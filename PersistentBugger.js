//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 1:
function persistence(num) {
  count = 0;
  if (num < 10){
    return 0;
  }
  while(true){
    NewNum = 1;
    lst = num.toString().split('');
    for ( let i =0; i < lst.length; i++){
      NewNum = NewNum * parseInt(lst[i]);
    }
    num = NewNum;
    count++;
    if (num < 10){
      return count;
    }
  }
  return count;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 2:
function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
