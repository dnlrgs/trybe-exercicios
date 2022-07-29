// 🚀 Crie duas funções JavaScript com as seguintes especificações:
// Não se esqueça de usar template literals
// Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável com o nome frase, do tipo const e com o valor igual a 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
// Exemplo:
// Parâmetro: 'Bebeto'
// Retorno: 'Tryber Bebeto aqui!'
// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// A função deverá receber o retorno da Função 1 por parâmetro;
// Declare dentro da função uma variável com o nome skills, do tipo const;
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Concatene o valor retornado da Função 1, a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
// Exemplo de retorno:
// Tryber Bebeto aqui!
// Minhas três principais habilidades são:
// JavaScript
// HTML
// CSS

const tryberPresent = (nome)=> `Tryber ${nome} aqui!`

const tryberSkills = (frase1) => {
    newFrase = `Minhas três principais habilidades são:`
    
    const skills = ['JavaScript', 'HTML', 'CSS']

    for (let index = 0; index < skills.length; index+=1) {
        newFrase += `
${skills[index]}`
    }
    return frase1 + newFrase
}


// FUNÇAO ABAIXO FOI FEITA A PRETEXTO DE TESTE
// const tryberSkills = (frase1) => {
//     newFrase = `Minhas três principais habilidades são:`
    
//     const skills = ['JavaScript', 'HTML', 'CSS']

//     for (let index = 0; index < skills.length; index+=1) {
//         if(index === skills.length - 1) {
//             newFrase += ` e ${skills[index]}`
//         } else if (index === 0) {
//             newFrase += ` ${skills[index]}`
//         } else {
//             newFrase += `, ${skills[index]}`
//         }
//     }
//     return frase1 + newFrase
// }

console.log(tryberSkills(tryberPresent('Daniel')));


