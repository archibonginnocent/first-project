var real = document.forms.exform;
// var a = parseInt(real.val1.value);
// var b = parseInt(real.val2.value);
var op = real.operator.value;
var calculate;


function sum (){

    real.calt.onclick =function(){
       var a = parseInt(real.val1.value);
       var b = parseInt(real.val2.value);
        op = real.operator.value;
        if(op == 'add'){
            calculate = a + b ;
        }else if (op == 'mul'){
            calculate = a * b;
            
        }else if (op == 'div'){
            calculate = a / b;

        }else if (op == 'min'){
            calculate = a - b;
            
        }

        console.log(calculate);
       

    }
    
}

console.log(sum());




    








function affirm(a){
    var gig = "your time is now " + a;
    return gig;

}
document.write(affirm('to trade'));


var con = function(){
    var gig = "time is on the move  " ;
    return gig;
   
}

document.write(con());











var age = 26;
var gender = 'female';

if(age == 19 || gender == 'male'){
    document.write('your current age is '+age+' and you are '+ gender);
}else if (gender == 'female' && age >= 30){
    document.write('you are a ' +gender+ ' congrats!');

}else{
    document.write(+gender+' not accepted');
}



var changecolor = document.getElementById("diff");
var colour = ["blue", "pink", "red"];
var counter = 0;

function colorchanger(){


    if( counter >= colour.length){
        counter = 0;

    }

    changecolor.style.background = colour[counter];
    counter++;

}

setInterval(colorchanger, 3000);







var myMessage = document.getElementById("message");

function createMessage (){

    myMessage.className = "display";
}

setTimeout(createMessage, 3000);








var compe = document.getElementById("practical");
var boxshow = document.getElementById("showmore");

boxshow.onclick = function(){

        if(compe.className == "open"){
        // shrink the box
        compe.className ="";
        boxshow.innerHTML = "Show more";

        }else{
            //expand the box
            compe.className = "open";
            boxshow.innerHTML = "Show less";
        }
};

