// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.


const nameJoinLowCase = (fullName) => {
    let nameJoinLowCase = ''
    for (let index = 0; index < fullName.length; index += 1) {
        if (fullName[index] !== ' ') {
            nameJoinLowCase += fullName[index]
        }
        
    }
    nameJoinLowCase = nameJoinLowCase.toLowerCase()
    return nameJoinLowCase
}


const emploeeAssemble = (fullName, func) => {
    const emploee = {}
    emploee.nomeCompleto = fullName
    emploee.email = func(fullName) + '@trybe.com'
    return emploee
}

const newEmployees = (prepare, mount) => {
    const employees = {
      id1: mount('Pedro Guerra', prepare),
      id2: mount('Luiza Drumond', prepare),
      id3: mount('Carla Paiva', prepare)
    }
    return employees;
  };


  console.log(newEmployees(nameJoinLowCase, emploeeAssemble));




  //email : nome_da_pessoa@trybe.com
  //return { nomeCompleto, email }