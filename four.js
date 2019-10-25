var numberofFNumbers;
var fNumbers = [];
fNumbers[0] = 0;
fNumbers[1] = 1;

function myFunction(numberofFNumbers) { 
    for (i = 2; i<=numberofFNumbers; i++){
        fNumbers[i] = fNumbers[i - 1] + fNumbers[i - 2];
    }

    for (i=0; i<numberofFNumbers; i++)
    {   
        console.log(fNumbers[i]);
    }
}
myFunction(7);