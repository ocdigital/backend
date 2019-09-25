const express = require("express") 
const app = express() 
const bodyParser = require("body-parser")
const Task = require("./models/Task")


app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


//BODY PARSER
  app.use(bodyParser.urlencoded({extended:true}))
  app.use(bodyParser.json())


//ROUTES
  app.get("/",function(req,res){
    Task.findAll({order:[['id','DESC']]}).then(function(posts){
      res.send("Tela Inicial")
    })
    
  })

    app.post("/add",function(req,res){
    req.body.conteudo
    
    Task.create({
      descricao: req.body.descricao
      
    }).then(function(){
      res.redirect("/listar")
    }).catch(function(erro){
      res.send(`Houve um erro ${erro}`)
    })
  })

  app.get("/deletar/:id", function(req,res){
    Post.destroy({where:{'id':req.params.id}}).then(function(){
      res.redirect("/")

    }).catch(function(){
      res.send("Esta postagem não existe!")

    })
  })

  app.get('/listar',(req, res)=> {
    Task.findAll({order:[['id','DESC']]}).then(function(tasks){
      res.json(tasks)
    })
    
  })


app.listen(3000, function(){
    console.log("<h1>Servidor rodando em porta 3000</h1>")
}) 
