//Challenge 4:
const myObj = {
    prop1: 'first value',
    prop2: 20
};
const myArray = [40,50,2];

const result = myObj.prop2 === (myArray[0] / myArray[2]); 
consule.log(result);
//true because myObj.prop2 = 20;
//(myArray[0] / myArray[2]) = (40/2) = 20;
// => 20 === 20 => myObj.prop2 === (myArray[0] / myArray[2]);
