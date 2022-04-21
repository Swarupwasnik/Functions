console.log("working");
//Ques1
let Name = function(x){
    return x*x
};
console.log(Name(10));

//Ques2
function calcRectArea(x, y) {
    return x + y;
  }
  
  console.log(calcRectArea(3, 4));


  //Ques3

  let sum = (a, b) => {
    let result =a+b*3;
    return result;
}

let result1 = sum(5,7);
console.log(result1);

//Question4

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();//Undefined

//Question 5;


var x = 21;
/*a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};
a();
b();
*/

//Question6

function factorialize(n) {
    if (n < 0) 
          return -1;
    else if (n == 0) 
        return 1;
    else {
        return (n* factorialize(n - 1));
    }
  }
   let z = factorialize(2);
   console.log(factorialize(z));