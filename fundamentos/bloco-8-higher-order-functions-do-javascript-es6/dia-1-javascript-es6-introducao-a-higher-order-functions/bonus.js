
// Anterior
// JavaScript ES6 - Introdução a Higher Order Functions
// Próximo
// Bônus
// Parte I - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

//   1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonAtack = (dragon) => dragon.damage = Math.floor(Math.random() * ((dragon.strength+1) - 15) + 15)


// 2 - Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorAtack = (warrior) => warrior.damage = Math.floor(Math.random() * (((warrior.strength * warrior.weaponDmg)+1) - warrior.strength) + warrior.strength)

// for (let index = 1; index < 10000; index++) {
//     if (warriorDamage(warrior) === warrior.strength * warrior.weaponDmg) {
//         console.log('yeees');
//     }
    
// }

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.

// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

// const mage = {
//     healthPoints: 130,
//     intelligence: 45,
//     mana: 125,
//     damage: undefined,
//   };


const mageAtackandManaAfterRound = (mage) => {
    const mageRound = {}
    if (mage.mana < 15) {
        mageRound.atack = "Não possui mana suficiente"
        console.log(mageRound.Atack);
    } else {

    mageRound.mana = mage.mana - 15

    mageRound.atack = Math.floor(Math.random() * (((mage.intelligence * 2)+1) - mage.intelligence) + mage.intelligence)

    }

    return mageRound


}

// console.log("atack mage: ",mageAtackandManaAfterRound(mage).atack);

// for (let index = 1; index < 1000; index++) {
//     if (Math.floor(Math.random() * (((mage.intelligence * 2)+1) - mage.intelligence) + mage.intelligence) === 45) {
//        console.log('yeeees');
//     }
    
// }

// Parte II
// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions. O objeto será composto por ações do jogo e cada ação é por denifição uma HOF, pois neste caso, são funções que recebem como parâmetro outra função.

// Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.

const gameActions = {
    // Crie as HOFs neste objeto.
    warriorMove: (warriorAtack) => {
        console.log('drago helth before reciving atack: ',dragon.healthPoints);
        warrior.damage = warriorAtack(warrior)
        dragon.healthPoints -= warrior.damage
        console.log("warrior atack: ", warrior.damage);
        console.log('drago helth after reciving atack: ',dragon.healthPoints);
    },

    mageMove: (mageAtackandManaAfterRound)=> {
        mage.damage = mageAtackandManaAfterRound(mage).atack
        dragon.healthPoints -= mage.damage
        mage.mana = mageAtackandManaAfterRound(mage).mana
    },

    dragonMove: (dragonAtack) => {
        dragon.damage = dragonAtack(dragon)
        mage.healthPoints -= dragon.damage
        warrior.healthPoints -= dragon.damage
    },

    playRound: () => {
        gameActions.warriorMove(warriorAtack)
        gameActions.mageMove(mageAtackandManaAfterRound)
        gameActions.dragonMove(dragonAtack)
        const battleMembers = {
            warriorHelth: warrior.healthPoints,
            mageHelth: mage.healthPoints,
            dragonHelth: dragon.healthPoints
        }
        console.log(`After round:
        Warrior's helth is ${warrior.healthPoints};
        Mage's helth is ${mage.healthPoints}
        Dragon's helth is ${dragon.healthPoints}`);

    } 

  };

// gameActions.warriorMove(warriorAtack)
// gameActions.mageMove(mageAtackandManaAfterRound)
// gameActions.dragonMove(dragonAtack)
gameActions.playRound()


// Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

// 3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.


// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.




