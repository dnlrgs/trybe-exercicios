
const fs = require('fs').promises
const readline = require('readline-sync')

const readAll = async () => {
    const fileContent = await fs.readFile('./exercicio-6/simpsons.json', 'utf-8')
    const simpsons = JSON.parse(fileContent)
    const strings = simpsons.map(({id, name})=> `${id} - ${name}`)
    strings.forEach((string) => console.log(string));
}




const getSimpsonById = async (id) => {
    const fileContent = await fs.readFile('./exercicio-6/simpsons.json', 'utf-8')
    const simpsons = JSON.parse(fileContent)
    console.log(simpsons);
    
    const chosenSimpson = simpsons.find((simpson) => simpson.id === id)
    
    if(!chosenSimpson) {
        throw new Error('id não econtrada')
    }
    return chosenSimpson
}


const main = async () => {
    try {
        await readAll()
        const idEntry = await readline.question('Entre id do simpson ')
        console.log(idEntry);
        const simpson = await getSimpsonById(idEntry)
        console.log(simpson);
        
        
    } catch (error) {
        console.log(error.message);
    }
}


main()