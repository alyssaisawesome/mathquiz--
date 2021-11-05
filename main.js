var playername1;
var playername2;

function adduser() {

    playername1=document.getElementById("player1name").value;
    playername2=document.getElementById("player2name").value;
    localStorage.setItem("player 1", playername1);
    localStorage.setItem("player 2", playername2);

    window.location = "indextwo.html";

    console.log("yay");
}