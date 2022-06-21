const fs = require("fs");
const path = require('path');
const jsonPath = path.join(__dirname, '..', 'data', 'users.json');


async function loadUsersRepository() {
  fs.readFile(jsonPath, 'utf-8', (err, res) => {
    if (err) throw err;
    if (res === '') { //verificar se o json está vazio, evitar erro 
      throw ('Error o JSON está vazio');
    };
    const userObj = JSON.parse(res);
    let nameList = '';
    for (elem of userObj) {
      nameList += `${elem.name} `;
    };
    return console.log(nameList);
});
};

async function createUserRepository(user) {
  fs.readFile(jsonPath, 'utf-8', (err, res) =>  { //precisei usar o readFile pra trabalhar com o RES
    let newData = ''
    if (res !== '') { //if para verificar se o json está vazio
      const dataObject = JSON.parse(res);
      newData = [...dataObject, user];
    } else {
      console.log('ELSE')
      newData = [user]; //Precisa colocar os [] para dar certo na linha 26----------
    };
    const dataString = JSON.stringify(teste, null, 2);
    fs.writeFile(jsonPath, dataString, (err) => {
      if (err) throw err;
    });
    return true;
  });
};

async function updateUserRepository(id, data) {
  if (id === undefined) {
    return console.log("User Id is required")
  }
  fs.readFile(jsonPath, 'utf-8', (err, res) => {
    if (res === '') {
      throw 'O JSON está vazio !!'
    }
    const userObj = JSON.parse(res) 
    userObj.forEach((user) =>{
      if (user.id === id) {
        user.name = data.name === undefined ? user.name : data.name
        user.email = data.email === undefined ? user.email : data.email
        user.password = data.password === undefined ? user.password : data.password
        user.phone = data.phone === undefined ? user.phone : data.phone
      }
    })
  })
}

async function deleteUserRepository(id) {
  if (id === undefined) {
    return console.log("User Id is required")
  }
  fs.readFile(jsonPath, 'utf-8', (err, res) => {
    if (res === '') {
      throw 'O JSON está vazio !!'
    }
    const userObj = JSON.parse(res)
    newObj = userObj.filter((user) => user.id !== id);
    console.log(newObj)
  });
};

deleteUserRepository(1003)
module.exports = {
  loadUsersRepository,
  createUserRepository,
  deleteUserRepository,
  updateUserRepository,
};
