var i;
var length = 100; 

/*There are four possible cases: 
  1) Multiple of 3 and 5 
  2) Multiple of 3 but not of 5
  3) Multiple of 5 but not of 3
  4) Not multiple of 3 or 5
  */
for (i = 1; i <= length; i++) {
  if (i % 3 == 0){
    if((i % 5 == 0)){
      console.log ("FizzBuzz");
    }
    else{
      console.log ("Fizz");
    }
  }
  else if (i % 5 == 0){
    if((i % 3 != 0)){
    console.log ("Buzz");
  }
  }
  else {
    console.log (i);
  }
}