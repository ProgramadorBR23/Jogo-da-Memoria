const currentPlayer = document.querySelector(".currentPlayer");

let seletor;
let jogador = "X";

let posicoes = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function init(){
    seletor = [];

    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${jogador}`;

    document.querySelectorAll(".jogo button").forEach((item) =>{
        item.innerHTML = "";
        item.addEventListener("click", nMovimento);
    });
}

init();

function nMovimento(e){
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = jogador;
    e.target.removeEventListener("click", nMovimento);
    seletor[index] = jogador;

    setTimeout(() => {
        check();
    }, [100]);


    jogador = jogador === "X" ? "O": "X";
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${jogador}`;
}

function check(){
    let jogadorLastMove = jogador === "X" ? "O": "X";

    const items = seletor
    .map((item, i) => [item, i])
    .filter((item) => item[0] === jogadorLastMove)
    .map((item) => item[1])

    for(pos of posicoes){
        if(pos.every((item)=> items.includes(item))){
            alert("O jogador '"+ jogadorLastMove +"' Ganhou !!");
            init();
            return;
        }
    }

    if(seletor.filter((item)=> item).length === 9){
        alert("Fim de jogo. Empate !!");
        init();
        return;
    }
}