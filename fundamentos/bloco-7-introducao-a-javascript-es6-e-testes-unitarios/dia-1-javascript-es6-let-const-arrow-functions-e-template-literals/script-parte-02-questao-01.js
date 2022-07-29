// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

const fatorial = (num) => {
  let resultado = 1
  if (num === 0) {
    resultado = 1
  }
  for (let index = 1; index <= num; index += 1) {
    resultado = resultado * index
  }
  return resultado
}

console.log(fatorial(0));
