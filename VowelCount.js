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
