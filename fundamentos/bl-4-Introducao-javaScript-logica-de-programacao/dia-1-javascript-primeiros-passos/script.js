//1 Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição(a + b);
// Subtração(a - b);
// Multiplicação(a * b);
// Divisão(a / b);
// Módulo(a % b);

let a = 21;
let b = 10;
let operacao = "Módulo";

switch (operacao) {
  case "Adição":
    console.log("a + b: " + (a + b));
    break;

  case "Subtração":
    console.log("a - b: " + (a - b));
    break;

  case "Multiplicação":
    console.log("a * b: " + a * b);
    break;

  case "Divisão":
    console.log("a / b: " + a / b);
    break;

  case "Módulo":
    console.log("a % b: " + (a % b));
    break;

  default:
    console.log("Não se aplica");
    break;
}

//2 Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

let valor1Q2 = 1541;
let valor2Q2 = 1541;

if (valor1Q2 > valor2Q2) {
  console.log(`${valor1Q2} é maior que ${valor2Q2}`);
} else if (valor2Q2 > valor1Q2) {
  console.log(`${valor2Q2} é maior que ${valor1Q2}`);
} else {
  console.log("Os valores são iguas ou não podem ser avaliados!");
}

//3 Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let valor1Q3 = 3;
let valor2Q3 = 150;
let valor3Q3 = 36;

if (valor1Q3 > valor2Q3 && valor1Q3 > valor3Q3) {
  console.log(`${valor1Q3} é maior que ${valor2Q3} e ${valor3Q3}`);
} else if (valor2Q3 > valor1Q3 && valor2Q3 > valor3Q3) {
  console.log(`${valor2Q3} é maior que ${valor1Q3} e ${valor3Q3}`);
} else if (valor3Q3 > valor1Q3 && valor3Q3 > valor2Q3) {
  console.log(`${valor3Q3} é maior que ${valor1Q3} e ${valor2Q3}`);
} else {
  console.log("Os valores são iguas ou não podem ser avaliados!");
}

//4 Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let valor1Q4 = -10;

if (valor1Q4 > 0) {
  console.log("positivo");
} else if (valor1Q4 < 0) {
  console.log("negativo");
} else if (valor1Q4 == 0) {
  console.log("zero");
} else {
  console.log("Não se aplica");
}

//5 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//--------Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//--------Um ângulo será considerado inválido se não tiver um valor positivo.

let angulo1 = 10;
let angulo2 = 40;
let angulo3 = 120;

if (
  angulo1 + angulo2 + angulo3 === 180 &&
  angulo1 > 0 &&
  angulo2 > 0 &&
  angulo3 > 0
) {
  console.log(true);
} else {
  console.log(false);
}

//6 Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//---Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//---Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
//--------Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//--------Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaXadrez = "REI";
/*
peão
torre
cavalo
bispo
rainha
rei
*/

switch (pecaXadrez.toLowerCase()) {
  case "peão":
    console.log(
      `${pecaXadrez.toLowerCase()} move somente para frente, uma casa por vez.`
    );
    break;
  case "bispo":
    console.log(
      `${pecaXadrez.toLowerCase()} move em uma linha reta diagonalmente no tabuleiro.`
    );
    break;
  case "torre":
    console.log(
      `${pecaXadrez.toLowerCase()} move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.`
    );
    break;
  case "cavalo":
    console.log(
      `${pecaXadrez.toLowerCase()} é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”.`
    );
    break;
  case "rainha":
    console.log(
      `${pecaXadrez.toLowerCase()} pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. `
    );
    break;
  case "rei":
    console.log(
      `${pecaXadrez.toLowerCase()} pode se mover para qualquer casa adjacente.`
    );
    break;

  default:
    break;
}

/*Kings move one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, known as castling.
Queens move diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.
Rooks move horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.
Bishops move diagonally any number of squares. They are unable to jump over pieces.
Knights move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.
Pawns move vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. The pawns capture one square diagonally in a forward direction.
Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.*/

// 7 Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
/*Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/
let porcentagem = -500;
let nota = "";
if (porcentagem > 100 || porcentagem < 0) {
  console.log("ERRO!");
} else if (porcentagem >= 90) {
  nota = "A";
} else if (porcentagem >= 80) {
  nota = "B";
} else if (porcentagem >= 70) {
  nota = "C";
} else if (porcentagem >= 60) {
  nota = "D";
} else if (porcentagem >= 50) {
  nota = "E";
} else if (porcentagem < 50) {
  nota = "F";
}
console.log(nota);

//8 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
//Bonus: use somente um if.

let numero1 = 3;
let numero2 = 5;
let numero3 = 22;

if (numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}

// 9 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.

let num1 = 30;
let num2 = 26;
let num3 = 22;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}

//10 Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
/*Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)*/

let custo = 10;
let venda = 15;

if (custo > 0 || venda > custo) {
  console.log("o lucro é de " + (venda - custo * 1.2));
}

// 11 Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
/*A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.*/

let salario = 3000;
let valorAliquotaINSS = 0;

if (salario <= 1556.94) {
  valorAliquotaINSS = salario * 0.08;
  console.log(valorAliquotaINSS);
} else if (salario >= 1556.94 && salario <= 2594.92) {
  valorAliquotaINSS = salario * 0.09;
  console.log(valorAliquotaINSS);
} else if (salario >= 2594.93 && salario <= 5189.82) {
  valorAliquotaINSS = salario * 0.11;
  console.log(valorAliquotaINSS);
} else if ((salario >= 5.189, 83)) {
  valorAliquotaINSS = 570.88;
  console.log(valorAliquotaINSS);
}

let salarioMenosINSS = salario - valorAliquotaINSS;
console.log("salario menos INSS ", salarioMenosINSS);

let valorAliquotaIR = 0;
let parcela = 0;
let valorAReceber = 0;

if (salarioMenosINSS <= 1903.98) {
  valorAReceber = salarioMenosINSS;
  console.log(salarioMenosINSS);
} else if (salarioMenosINSS >= 1903.99 && salarioMenosINSS <= 2826.65) {
  valorAReceber = salarioMenosINSS - (salarioMenosINSS * 0.075 - 142.8);
  console.log(valorAReceber);
} else if (salarioMenosINSS >= 2826.66 && salarioMenosINSS <= 3751.05) {
  valorAReceber = salarioMenosINSS - (salarioMenosINSS * 0.15 - 354.8);
  console.log(valorAReceber);
} else if (salarioMenosINSS >= 3751.06 && salarioMenosINSS <= 4664.68) {
  valorAReceber = salarioMenosINSS - (salarioMenosINSS * 0.225 - 636.13);
  console.log(valorAReceber);
} else if (salarioMenosINSS > 4664.68) {
  valorAReceber = salarioMenosINSS - (salarioMenosINSS * 0.275 - 869.36);
  console.log(valorAReceber);
}
