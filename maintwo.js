var num1;
var num2;

var name1 = localStorage.getItem("player 1");
var name2 = localStorage.getItem("player 2");

var score1 = 0;
var score2 = 0;

var questionturn = "player1";
var answerturn = "player2";

var guess = "";

document.getElementById("playername1").innerHTML=name1 + ": ";
document.getElementById("playername2").innerHTML=name2 + ": ";

document.getElementById("score1").innerHTML=score1;
document.getElementById("score2").innerHTML=score2;

document.getElementById("playerquestionturn").innerHTML="Question Turn - " + name1;
document.getElementById("playeranswerturn").innerHTML="Answer Turn - " + name2;


function sendword() {

    getn1 = document.getElementById("wordinput1").value;
    getn2 = document.getElementById("wordinput2").value;
    geteq = document.getElementById("equationdropdown").value;

    question = "<h4 id='qdisplay'> Q. " + getn1 + " " + geteq + " " + getn2 + "</h4>";
    inputbox  = "<br> <input type='number' placeholder='Answer' id='answertext'>";
    button = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + inputbox + button;

    document.getElementById("output").innerHTML=row;
    document.getElementById("wordinput1").value= '';
    document.getElementById("wordinput2").value= '';
}

function  check() {
    guessedanswer = document.getElementById("answertext").value;
    if (geteq == "/") {
        answer = getn1/getn2;    
    }
    else if (geteq == "*") {
        answer = getn1 * getn2;    
    }
    else if (geteq == "+") {
        answer = getn1 + getn2;
        Number(answer);    
    }
    else if (geteq == "-") {
        answer = getn1 - getn2;    
    }

    console.log(answer);
    
    if (answer == guessedanswer) {

        if (answerturn == "player1") {

            score1 = score1 + 1;
            document.getElementById("score1").innerHTML = score1;

            guess = "yay";

        }

        else {

            score2 = score2 + 1;
            document.getElementById("score2").innerHTML = score2;

            guess = "yay";

        }

    }

    if (questionturn == "player1") {

        questionturn = "player2";
        document.getElementById("playerquestionturn").innerHTML = "Question Turn - " + name2;

    }

    else {

        questionturn = "player1";
        document.getElementById("playerquestionturn").innerHTML = "Question Turn - " + name1;

    }





    if (answerturn == "player1") {

        answerturn = "player2";
        document.getElementById("playeranswerturn").innerHTML = "Answer Turn - " + name2;

    }

    else {

        answerturn = "player1";
        document.getElementById("playeranswerturn").innerHTML = "Answer Turn - " + name1;

    }


    if (guess == "yay") {
    document.getElementById("output").innerHTML = "<h4> The answer was: " + answer + ".</h4>" + "<br>" + "<h4> You guess was: " + guessedanswer + ".</h4>" + "<br>" + "<h4> You were correct! </h4>";
    guess = "";
    }
    else {
    document.getElementById("output").innerHTML = "<h4> The answer was: " + answer + ".</h4>" + "<br>"  + "<h4> You guess was: " + guessedanswer + ".</h4>" + "<br>" + "<h4> You were incorrect... </h4>";
    }

}