const Sequelize = require("sequelize")
//Conexao com banco de dados
const sequelize = new Sequelize('node','root','',{host:"localhost", dialect:"mysql"})

module.exports ={
    Sequelize: Sequelize,
    sequelize: sequelize
}