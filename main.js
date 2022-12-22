
var enterButton = document.getElementById('enterButton');
var againButton = document.getElementById('againButton');
var output = document.getElementById('outputtext');

var randomNumber = Math.ceil(Math.random() * 100);

function checkNumber(){
    var input = document.getElementById('userInput').value;
    if (input == randomNumber){
        output.innerHTML = "You guessed right,"+ ","+ "it Was" + randomNumber;
        output.style.color="orange";
        

}else if(input>randomNumber && input<100){
    output.innerHTML="you Guess to high, try again" ;
}else if(input<randomNumber && input>1){
    output.innerHTML = "Low, try again";
}else if(input<1){
   output.innerHTML = "so high you have to choose between 1 to 100";
}
else if (isNaN(input)){
    output.innerHTML = "invalid Number. try Again";
    
}else{
    output.innerHTML = "You have to low number ,try again"
}
}

enterButton.addEventListener('click', checkNumber);
againButton.addEventListener('click', function(){
    Location.reload();
})

