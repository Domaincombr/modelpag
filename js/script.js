const movetelaid = document.getElementById("movetelaid");

function esquerda(){
    movetelaid.scrollBy({
        left: -100, 
        behavior: 'smooth'  
    });
}
function direita(){
    movetelaid.scrollBy({
        left: 100, 
        behavior: 'smooth' 
    });
}



const btfaq = document.querySelectorAll(".btfaque");
const perguntafaque = document.querySelectorAll(".perguntafaque");

btfaq.forEach((botao, index) => {
    botao.addEventListener("click", function() {
        perguntafaque[index].classList.toggle("perguntafaqueactive");
    });
});




var popy = 1;

function baacriver(){
    if(popy % 2 == 1){
        
const barraid = document.getElementById("barraid");
        barraid.classList.remove("barraleteral");
        barraid.classList.remove("barraleteraloff");
        barraid.classList.add("barraleteralon");
    }
    else{
        barraid.classList.remove("barraleteralon");
        barraid.classList.add("barraleteraloff");
    }

    popy++;
}



function chamada(){
    window.location = "https://pay.kiwify.com.br/M0fAKBu";
}


