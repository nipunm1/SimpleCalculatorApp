window.document.getElementById('plus').addEventListener('click',plus);
window.document.getElementById('minus').addEventListener('click',minus);
window.document.getElementById('multiply').addEventListener('click',multiply);
window.document.getElementById('divide').addEventListener('click',divide);
window.document.getElementById('remainder').addEventListener('click',remainder);
window.document.getElementById('clear').addEventListener('click',clear);

function clear(){
    document.getElementById('number1').value="";
    document.getElementById('number2').value="";
}

function plus(){
    var getNumber1=parseInt(document.getElementById('number1').value);
    var getNumber2=parseInt(document.getElementById('number2').value);
    document.getElementById('number1').value="";
    document.getElementById('number2').value="";
    var result=getNumber1+getNumber2;
    document.getElementById('display').innerHTML=getNumber1+"+"+getNumber2+"="+result;
}

function minus(){
    var getNumber1=parseInt(document.getElementById('number1').value);
    var getNumber2=parseInt(document.getElementById('number2').value);
    document.getElementById('number1').value="";
    document.getElementById('number2').value="";
    var result=getNumber1-getNumber2;
    document.getElementById('display').innerHTML=getNumber1+"-"+getNumber2+"="+result;
}

function multiply(){
    var getNumber1=parseInt(document.getElementById('number1').value);
    var getNumber2=parseInt(document.getElementById('number2').value);
    document.getElementById('number1').value="";
    document.getElementById('number2').value="";
    var result=getNumber1*getNumber2;
    document.getElementById('display').innerHTML=getNumber1+"*"+getNumber2+"="+result;
}

function divide(){
    var getNumber1=parseInt(document.getElementById('number1').value);
    var getNumber2=parseInt(document.getElementById('number2').value);
    document.getElementById('number1').value="";
    document.getElementById('number2').value="";
    var result=getNumber1/getNumber2;
    document.getElementById('display').innerHTML=getNumber1+"/"+getNumber2+"="+result;
}

function remainder(){
    var getNumber1=parseInt(document.getElementById('number1').value);
    var getNumber2=parseInt(document.getElementById('number2').value);
    document.getElementById('number1').value="";
    document.getElementById('number2').value="";
    var result=getNumber1%getNumber2;
    document.getElementById('display').innerHTML=getNumber1+"%"+getNumber2+"="+result;
}