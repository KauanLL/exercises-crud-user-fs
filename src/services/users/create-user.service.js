const fs = require("fs")
const { resolve } = require("path")
const jsonPath = '../../data/users.json'

async function createUser({ name, email, password, phone }) {
  

  /*
  - TODO 15: Os campos name, email, password são obrigatórios, caso algum não seja passado deve retornar uma exceção de error "Name, Email, Password are required";
  - TODO 16: Se o email passado já existir no banco para outro usuário, deve retornar uma exceção com o erro "User already exists";
  - TODO 17: Deve gerar o ID automaticamente a partir de 1000;
  - TODO 18: Deve ser usado a funcionalidade "encryptPassword" para proteger o password;
  - TODO 19: Deve retornar um usuário válido ao final do processo de insert;
*/
}

const users = [
{
    id: 1000,
    name: "Fulano",
    email: "Fulaasdasdasssno@gmail.com",
    password: "Fulanolano",
    phone: "(11) 99498-4444"
}
]

const usersString = JSON.stringify(users, null, 2)

fs.readFile(jsonPath, 'utf-8', (err, res) => {
  if (err) {
    console.log(err)
  }
  if (res === '') {
    fs.writeFile(jsonPath, usersString, (err) => {
      if (err) throw err;
    })
  }
})


// fs.writeFile(jsonPath, JSON.stringify(data, null, 2), (err) => {
//   if (err) throw err;
// })

// ---------------------------------------------------------
// FUNCIOANNDODOADOAODOAODAODOADOAODO
// fs.readFile(jsonPath, 'utf-8', (err, res) => {
//   const dataObject = JSON.parse(res)
//   newData = [...dataObject, data];
//   const dataString = JSON.stringify(newData, null, 2)
//   fs.writeFile(jsonPath, dataString, (err) => {
//     if (err) throw err;
//     console.log('foia')
//   }) 
// })
// ---------------------------------------------------------

// fs.writeFile(jsonPath, dataString, (err) => {
//   if (err) {
//     console.log('err')
//   }
// });

// fs.appendFile(jsonPath, dataString, (err) => {
//   if (err) {
//     console.log('err')
//   }
// });

// fs.readFile(jsonPath, 'utf-8', (err, res) => {
//   if (err) {
//     console.log('err')
//   }
//   console.log(typeof res)
//   const teste = JSON.parse(res)
//   console.log(teste)

// })
// fs.readFile(jsonPath, (err, res) => {
//   const teste = JSON.parse(res);
//   teste.push(teste + data)
// });


// fs.readFile(jsonPath,'utf8',function (err, data) {
//   if(err) console.log(err);
//   const test1 = JSON.parse(data);
//   test1.dataString('.push({}')
//   fs.writeFileSync('test.json',dataString)
// });

module.exports = { createUser };
