//Crie uma função que receba uma frase e retorne a maior palavra.


const findBiggestLengthOfArrayItens = (array) => {
  let biggestLength = ''
  for (let index = 0; index < array.length; index +=1) {
    biggestLength.length < array[index].length && (biggestLength = array[index])
  }
  return biggestLength
}

const stringToArray = (string) => {

  const newArray = []

  let word = '';

  for (let index = 0; index < string.length; index+=1) {
    if (string[index] === " ") {
      newArray.push(word)
      word = ''
    } else {
      word += string[index]
    }
  }
  newArray.push(word)

  return newArray

}

const biggerWord = (string) => {

  const newArray = stringToArray(string)

  const biggestword = findBiggestLengthOfArrayItens(newArray)

  return biggestword

}

console.log(biggerWord("estou estudando muito já que não estudei nada antes e vou soltar uma palavra gifante agora estitucionalicimamente"));

