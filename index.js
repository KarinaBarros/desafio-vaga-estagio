/* 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?

4) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, ___
b) 2, 4, 8, 16, 32, 64, ____
c) 0, 1, 4, 9, 16, 25, 36, ____
d) 4, 16, 36, 64, ____
e) 1, 1, 2, 3, 5, 8, ____
f) 2,10, 12, 16, 17, 18, 19, ____ 

5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?*/



// Questão 1

function fibonacci(numero) {
    let a = 0;
    let b = 1;
    
    while (b < numero) {
        const proximo = a + b; 
        a = b;
        b = proximo;
    }

    return b === numero ? `${numero} pertence à sequência de Fibonacci.` : `${numero} não pertence à sequência de Fibonacci.`;
} 

// Questão 2

const numeroInformado = 30; 
console.log(fibonacci(numeroInformado));

function verificar(string) {
    let contador = 0;
    const stringMin = string.toLowerCase();

    for(let i = 0; i < stringMin.length; i++) {
        if (stringMin[i] === 'a'){
            contador++;
        }
    }
    return contador;
}

const stringInformada = "A gata bebeu leite na caneca."
console.log(verificar(stringInformada));


// Questão 3

let indice = 12;
let soma = 0;
let k = 1;

while(k < indice) {
    k = k + 1
    soma = soma + k
}
console.log(soma);
//O valor da variavel SOMA é 77

/* questão 4 
a = 9
b = 128
c = 49
d = 100
e = 13
f = 22
*/

/* Questão 5
Ligaria o primeiro interruptor por alguns minutos e desligaria e o segundo interruptor deixaria ligado.
Ao entrar nas salas se a luz estiver ligada pertence ao segundo interruptor , se a lampada estiver desligada e quente pertence ao primeiro e se estiver desligada e fria pertentence ao terceiro.
Entrando nas duas primeira salas se descobre seus interruptores e o q faltar é o q esta sobrando.
*/