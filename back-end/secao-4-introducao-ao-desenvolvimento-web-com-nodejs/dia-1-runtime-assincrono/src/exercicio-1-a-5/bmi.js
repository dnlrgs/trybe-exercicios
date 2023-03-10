const readline = require('readline-sync')

const height = readline.questionInt('Qual a sua alura em centímetros? ')
const weigth = readline.questionFloat('Qual o seu peso em kg? ')

const bmi = (height, weight) => {
    heightMeters = height/100

    return (Math.round((weight / (heightMeters**2) + Number.EPSILON) * 100) / 100);
}

const userBmi = bmi(height, weigth)

const bmiStatus = (userBmi) => {
    if (userBmi < 18.5) {
        return 'Abaixo do peso'
    } else if (userBmi >= 18.5 & userBmi <= 24.9) {
        return 'Peso normal'
    } else if (userBmi >= 25 & userBmi <=29.9) {
        return 'Acima do peso (sobrepeso)'
    } else if (userBmi >= 30 & userBmi <= 34.9) {
        return 'Obesidade grau I'
    } else if (userBmi >= 35 & userBmi <= 39.9) {
        return 'Obesidade grau II'
    }
    return 'Obesidade graus III e IV'

}

const bmiUserStatus = bmiStatus(userBmi)

console.log(`O seu índice de massa corporal é , ${userBmi}. ${bmiUserStatus}`);