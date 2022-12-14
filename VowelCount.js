//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 1:
function getCount(str) {
  var count = 0;
  for (index in str){
    switch(str[index]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    count++;
    break;
    }
  }
  return count;
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 2:
function getCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    switch(str[i]){
        case 'a':
          count++;
          break;
        case 'e':
          count++;
          break;
        case 'i':
          count++;
          break;
        case 'o':
          count++;
          break;
        case 'u':
          count++;
          break;
    }
  }
  return count;
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 3:
function getCount(str) {
  let key = ['a','e','i','o','u'];
  let array = str.split("")
  return array.filter(letter => {
    return key.includes(letter)? true:false;
  }).length;
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
