var stringLength; 
var stringInput;
var stringOutput = [];
var StringOutputIncrementer = 0; 

// Creating a function to read string in
function myFunction(stringInput) { 
    stringLength = stringInput.length;
    
    for (i = stringLength; i>0; i--){
        stringOutput[StringOutputIncrementer] = stringInput[i-1];
        StringOutputIncrementer++;
    }
    console.log(stringOutput.join("")); 
  }
  myFunction("hello");