let ones = document.getElementById("one");
let twos = document.getElementById("two");
let threes = document.getElementById("three");
let fours = document.getElementById("four");
let fives = document.getElementById("five");
let sixs = document.getElementById("six");
let sevens = document.getElementById("seven");
let eights = document.getElementById("eight");
let nines = document.getElementById("nine");


const pla = ()=>{ 
    var ayme = document.getElementById("myAduio")
    var isPlaying = false;
    if (isPlaying) {
        ayme.pause();
        ay.innerText = "play music";
    }
    else{
        ayme.play();
        ay.innerText = "pause music";
    }
    isPlaying = true;
}
let ini = "X";
const starts = ()=>{
    if (player1.value != "" && player2.value != "") {
        playr1.innerText = `${player1.value} you are player 1`
        playr2.innerText = `${player2.value} you are player 2`
    }else{
        ready.innerText = "Please provide your name"
    }
}
const sa = (e)=>{
    if (player1.value != "" && player2.value != ""){
        if (ini == "X" &&  e.target.innerText == "") {
            e.target.innerText = "X";
            ini = "O";
        }else if (ini == "O" &&  e.target.innerText == "") {
            e.target.innerText = "O";
            ini = "X";
        }
        let a = ones.innerHTML;
        let b = twos.innerHTML;
        let c = threes.innerHTML;
        let d = fours.innerHTML;
        let f = fives.innerHTML;
        let g = sixs.innerHTML;
        let h = sevens.innerHTML;
        let i = eights.innerHTML;
        let j = nines.innerHTML;
        if ((a == "X" && b == "X" && c == "X") || (d == "X" && f == "X" && g == "X") || (h == "X" && i == "X" && j == "X") || (a == "X" && d == "X" && h == "X") || (b == "X" && f == "X" && i == "X") || (c == "X" && g == "X" && j == "X") || (a == "X" && f == "X" && j == "X") || (c == "X" && f == "X" && h == "X")) {
            let p1=0;
            p1 = 0 + 1;
            display.innerText = `${player1.value} you win this round`
            ini = "";
            playr11.innerHTML = p2;
        }else if ((a == "O" && b == "O" && c == "O") || (d == "O" && f == "O" && g == "O") || (h == "O" && i == "O" && j == "O") || (a == "O" && d == "O" && h == "O") || (b == "O" && f == "O" && i == "O") || (c == "O" && g == "O" && j == "O") || (a == "O" && f == "O" && j == "O") || (c == "O" && f == "O" && h == "O")) {
            let p2=0;
            p2 = 0 + 1;
            display.innerText = `${player2.value} you win this round`;
            ini = "";
            playr22.innerHTML = p2;

        }

    }else{
        ready.innerText = "Please provide your name"
    }
}