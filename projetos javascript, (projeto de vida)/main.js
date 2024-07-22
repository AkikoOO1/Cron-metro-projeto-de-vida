const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo_Primeiro = new Date("2024-09-31T00:00:00");
const tempoObjetivo_Segundo = new Date("2024-12-13T20:00:00");
const tempoObjetivo_Terceiro = new Date("2024-08-12T00:00:00");
const tempoObjetivo_Quarto = new Date("2024-09-07T00:00:00");

const tempos = [tempoObjetivo_Primeiro, tempoObjetivo_Segundo, tempoObjetivo_Terceiro, tempoObjetivo_Quarto]; //Essa é uma lista//

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000); //está divido por mil, para deixar os milisegundo em segundos. e esse math.floor ele está arredondando o número//
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    //Essa parte que fez a contagem regressiva, fazer sentido//
        segundos %= 60;
        minutos %= 60;
        horas %= 24;
    if (tempoFinal> 0){
        return [dias,horas,minutos,segundos];
    } else{
        return [0,0,0,0];
    }
}

//document.getElementById('dias0').textContent = calculaTempo(tempos[1])[0];||| Como eu usei um laço de repetição não irá precisar dessa lista de código chamou os elementos 
//através do id que foi atribuido lá no html, Esses [0], [1], [2], [3] são os valores que estão no return, esses que estão depois dos parenteses, Esses que estão dentro do parentes (tempo[0]) está se referindo aos botões/páginas do cronometro//
function atualiza_Cronometro(){
for(let i=0; i<contadores.length; i++){ //laço de repetiçã//
    document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
    document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1]; 
    document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
    document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
    } 
}
function comecaCronometro(){ //<----só para deixa o código mais organizado//
    atualiza_Cronometro(); //fez o cronometro voltar a aparecer//
    setInterval(atualiza_Cronometro, 1000); //fez com que os segundo atualizassem sozinhos, sem eu der que ficar atualizando a página toda hora//
}
comecaCronometro(); //fez o cronometro voltar a aparecer de novo//
