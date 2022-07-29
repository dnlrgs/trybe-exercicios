// 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.

      function testingScope(escopo) {
        if (escopo === true) {
          let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
          console.log(ifScope);
        } else {
          const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
        // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
      }

      testingScope(true);

//🚀 Crie uma função que retorne um array em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const rearenge = (array) => array.sort((a, b) => a - b)

console.log(rearenge(oddsAndEvens)); // será necessário alterar essa linha 😉
