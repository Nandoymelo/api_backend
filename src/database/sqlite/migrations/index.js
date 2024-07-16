const sqliteConnection = require("..");

const createUsers = require("./createUsers");

async function migrationsRun(){
  //tabelas que o banco vai ter
  const schemas = [
    createUsers
  ].join('');
  //chamar o sqlite
  sqliteConnection()
  .then( db => db.exec(schemas)) //executar o banco
  .catch( error => console.error(error));
}

module.exports = migrationsRun;