const display= document.getElementById("display");
const calculator= document.getElementById("calculator");

function clearDisplay(){
    display.value="";
}
function appendToDisplay(input){
    display.value += input;
}
function calculate(){
    try{
    display.value= eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}