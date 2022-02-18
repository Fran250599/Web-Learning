var number1;
var number2;

function multiplication(){

    number1 = document.getElementById('number1').value;
    number2 = document.getElementById('number2').value;

    var result = number1 * number2;
    document.getElementById('result').innerHTML = result;
}

function division(){
    number1 = document.getElementById('number1').value;
    number2 = document.getElementById('number2').value;
    var result;

    if(number2 < 1){
        document.getElementById('result').innerHTML = "Divisor invalido";


    }else{
        var result = number1 / number2;
        document.getElementById('result').innerHTML = result; 
    }


    

    


}