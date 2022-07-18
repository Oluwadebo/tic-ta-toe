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
    let users = new Audio('Teni_-_Hustle_Mp3bullet.ng.mp3')
    users.play();
}
let ini = "X";
const sa = (e)=>{
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
    if ((a == "X" && b == "X" && c == "X") || (d == "X" && f == "X" && g == "X") || (h == "X" && i == "X" && j == "X") || (a == "X" && d == "X" && h == "X") || (b == "X" && f == "X" && i == "X") || (c == "X" && g == "X" && j == "X")) {
        display.innerText = "You win"
    }else if ((a == "O" && b == "O" && c == "O") || (d == "O" && f == "O" && g == "O") || (h == "O" && i == "O" && j == "O") || (a == "O" && d == "O" && h == "O") || (b == "O" && f == "O" && i == "O") || (c == "O" && g == "O" && j == "O")) {
        display.innerText = "You win"
    }
}