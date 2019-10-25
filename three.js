var numberProvided;
var timesTableIterations = 12;

function myFunction(numberProvided) {
    for (i = 1; i<=timesTableIterations; i++){
        console.log(i + " x " + numberProvided + " = " + i*numberProvided);
    }
}
myFunction(8);