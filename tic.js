const pla = ()=>{ 
    var ayme = document.getElementById("myAduio");
    ayme.play();
}
const sto = ()=>{ 
    var ayme = document.getElementById("myAduio");
    ayme.pause();
}
let ones = document.getElementById("one");
let twos = document.getElementById("two");
let threes = document.getElementById("three");
let fours = document.getElementById("four");
let fives = document.getElementById("five");
let sixs = document.getElementById("six");
let sevens = document.getElementById("seven");
let eights = document.getElementById("eight");
let nines = document.getElementById("nine");
const empty=()=>{
    ini = "X";
    ones.innerHTML="";
    twos.innerHTML="";
    threes.innerHTML="";
    fours.innerHTML="";
    fives.innerHTML="";
    sixs.innerHTML="";
    sevens.innerHTML="";
    eights.innerHTML="";
    nines.innerHTML="";
}
const restarts = ()=>{
    let anser = confirm('Are you sure u want to restart');
    if (anser === true) {
        location.reload();
    }
}

const starts = ()=>{
    if (player1.value != "" && player2.value != "") {
        playr1.innerText = `${player1.value} you are player 1`
        playr2.innerText = `${player2.value} you are player 2`
        nam1.innerHTML = `${player1.value}`
        nam2.innerHTML = `${player2.value}`
        nam11.innerHTML = `${player1.value}`
        nam22.innerHTML = `${player2.value}`
    }else{
        alert("Please provide your name")
        // ready.innerText = "Please provide your name"
    }
}

let ini = "X";
let s1 = parseInt(0);
let d1 = parseInt(0)
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
        // check winning
        if ((a == "X" && b == "X" && c == "X") || (d == "X" && f == "X" && g == "X") || (h == "X" && i == "X" && j == "X") || (a == "X" && d == "X" && h == "X") || (b == "X" && f == "X" && i == "X") || (c == "X" && g == "X" && j == "X") || (a == "X" && f == "X" && j == "X") || (c == "X" && f == "X" && h == "X")) {
          setTimeout(()=>{
            display.innerText = `${player1.value} win this round`
            empty();
            ini = "";
            s1 = s1+1;
            scor1.innerHTML=s1;
            scor11.innerHTML=s1;
            return;
          },500)
        }else if ((a == "O" && b == "O" && c == "O") || (d == "O" && f == "O" && g == "O") || (h == "O" && i == "O" && j == "O") || (a == "O" && d == "O" && h == "O") || (b == "O" && f == "O" && i == "O") || (c == "O" && g == "O" && j == "O") || (a == "O" && f == "O" && j == "O") || (c == "O" && f == "O" && h == "O")) {
            setTimeout(()=>{
                display.innerText = `${player2.value} win this round`;
                empty();
                ini = "";
                d1 = d1+1;
                scor2.innerHTML=d1;
                scor22.innerHTML=d1;
                return;
            },500)
        }
    }else{
        alert("Please provide your name")
        // ready.innerText = "Please provide your name"
    }
}
const resect = ()=>{
    ini = "X";
    ones.innerHTML = "";
    twos.innerHTML  = "";
    threes.innerHTML  = "";
    fours.innerHTML  = "";
    fives.innerHTML  = "";
    sixs.innerHTML  = "";
    sevens.innerHTML  = "";
    eights.innerHTML  = "";
    nines.innerHTML  = "";
}