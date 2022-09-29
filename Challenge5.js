const myObj = { // tạo một biến dictionary myObj;
  nestedObject1:{ // tạo ra một dictionary nestedObject1 trong dictionary myObj;
    price: 100, // trong dictionary nestedObject1: tạo |price(key):100(value)|;
    quantity: 5 // trong dictionary nestedObject1: tạo |quantity(key):5(value)|; 
  },
  nestedObject2: { // tạo một dictionary nestedObject2 trong dictionary myObj;
    price: 150, // trong dictionary nestedObject2: tạo |price(key):150(value)|;
    quantity: 2 // trong dictionary nestedObject2: tạo |quantity(key):2(value)|;
   }
};

const myArray = [myObj.nestedObject1, myObj.nestedObject2];

const result = 
            (myArray[0].price * myArray[0].quantity) >
            (myArray[1].price * myArray[1].quantity); 
// myArray[0].price = 100;
// myArray[0].quantity = 5;
// myArray[1].price = 150;
// myArray[2].price = 2;
// => (myArray[0].price * myArray[0].quantity) = (100 * 5) = 500;
// => (myArray[2].price * myArray[1].quantity) = (150 * 2) = 300;
// => 500 > 300 => (myArray[0].price * myArray[0].quantity) > (myArray[2].price * myArray[1].quantity);
