const db = require("./db")

const Task = db.sequelize.define('tasks',{
    descricao:{
        type:db.Sequelize.STRING
    },
    
})

//Task.sync({force:true})

module.exports = Task