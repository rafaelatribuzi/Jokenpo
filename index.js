// 1. Seleciona elementos do DOM com base no ID - aqui estarão todos os elementos que terão interação no site

//MOSTRAR E ESCONDER AS REGRAS

//Obs: Aqui estou usando o "querySelector" pq coloquei uma classe, se fosse um Id, poderia ser getElementById
const botaoDuvidas = document.querySelector(".duvidas"); //botão de interrogação

// elementos que estão escondidos
const textoFunciona = document.querySelector(".texto-funciona");
const textoRegras = document.querySelector(".texto-regras");
const imagemFluxo = document.querySelector(".imagem-jopenko");

// colocar o evento de clicar no botão
botaoDuvidas.addEventListener("click", () => {
  // uando clicar, tem que mostrar os elementos escondidos, por isso muda o style de "nome" para "block". Depois preciso avaliar se está visível, se estiver vai esconder e vice-versa.
const estaVisivel = textoFunciona.style.display === "block";

  textoFunciona.style.display = estaVisivel ? "none" : "block";
  textoRegras.style.display = estaVisivel ? "none" : "block";
  imagemFluxo.style.display = estaVisivel ? "none" : "block";
});


//BOTÕES QUE PODEM SER CLICADOS

//primeiro lista onde teremos interação com o cliente

const btnPedra = document.getElementById("btn-pedra"); // aqui usei ID no HTML, então pode usar getElementById
const btnPapel = document.getElementById("btn-papel");
const btnTesoura = document.getElementById("btn-tesoura");

//aqui é a ação de clicar

btnPedra.addEventListener("click", () => jogar("pedra"));
btnPapel.addEventListener("click", () => jogar("papel"));
btnTesoura.addEventListener("click", () => jogar("tesoura"));

// vamos zerar o score

let vitorias = 0;
let derrotas = 0;

// aqui vamos iniciar o jogo

//primeiro temos que listar as opções que temos no jogo com um array

function jogar(escolhaJogador) {
    const opcoes = ["pedra", "papel", "tesoura"];


// agora a escolha do computador com um Math Random

const escolhaDoComputador = opcoes[Math.floor(Math.random() * 3)];

//resultado do jogo

let resultado = "";

//agora as condições

if(escolhaJogador === escolhaDoComputador) {
    resultado = "Empate!";
  } else if (
    (escolhaJogador === "pedra" && escolhaDoComputador === "tesoura") ||
    (escolhaJogador === "papel" && escolhaDoComputador === "pedra") ||
    (escolhaJogador === "tesoura" && escolhaDoComputador === "papel")
  ) {
    resultado = "Você Ganhou!";
    vitorias++;
  } else {
    resultado = "Você Perdeu!";
    derrotas++;
  }



    atualizarImagens(escolhaJogador, escolhaDoComputador);

    const resultadoTexto = document.querySelector("#voce-ganhou");

    resultadoTexto.textContent = resultado;

    document.getElementById("score").textContent = `${vitorias}/${derrotas}`;

    
    
    function atualizarImagens(jogador, computador) {
        const imgJogador = document.getElementById("img-jogador"); //você(jogador)
        const imgComputador = document.getElementById("img-computador"); //computador
      
        imgJogador.src = `/imagens/${jogador}.svg`;
        imgComputador.src = `/imagens/${computador}.svg`;
      
        imgJogador.alt = jogador;
        imgComputador.alt = computador;
      }

      
    }
