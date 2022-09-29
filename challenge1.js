//Error:
const NumberVariable = 0;

NumberVariable++;
NumberVariable++;
NumberVariable++;

console.log(NumberVariable); 
//Fix:
let NumberVariable = 0;

NumberVariable++;
NumberVariable++;
NumberVariable++;

console.log(NumberVariable); 
