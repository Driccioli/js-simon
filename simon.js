var output= document.getElementById("output");

var numbers= [];

for(i=1; i<=5; i++){
    var temporaryNum = getRandomNumber(1,50);
    if(numbers.includes(temporaryNum)){
        console.log("Rerolling...")
        i--;
    }   else{
        console.log(i + " : "+ temporaryNum);
        numbers.push(temporaryNum);
    }
}

alert(numbers);

function getRandomNumber(min, max) {
    if(max >= min){
        var randomNumber = Math.floor(Math.random() * (max - min + 1)+min);
        return randomNumber;
    }   else{
        console.log("Il massimo è minore del minimo, scambio i numeri");
        return getRandomNumber(max, min);
    }
    
}

var timer = setTimeout(function(){
    var inputs = [];
    var guessed = [];
    for(k=1; k<=5; k++){
        var tempInput = parseInt(prompt("Inserisci il " + k + "° numero"));
        while(inputs.includes(tempInput)){
            tempInput = parseInt(prompt("Numero già inserito. <br> Inserisci il " + k + "° numero"));
        }
        inputs.push(tempInput);
    }

    for(l=0; l< inputs.length; l++){
        if(numbers.includes(inputs[l])){
            guessed.push(inputs[l]);
        }
    }

    output.innerHTML += guessed.length + " numbers guessed";
    for(a=0; a<guessed.length; a++){
        output.innerHTML +="<br>" + guessed[a];
    }
}, 10*1000);