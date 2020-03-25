const express = require('express');
const routes = express.Router();

//este exemplo é o mesmo da segundo exemplo só que simpificado
//app.get('/', (req, res) => res.send('Hello World!'));

//este exemplo completo de uma reuqisição simples
routes.get('/',function(req, res){
    res.send("Hello word");
})

//Get => Buscar info -- Select para listagem de infos
//req.query = acessar a query ou params (filtros)
//localhost:3000/?idade=37&sexo=M
routes.get('/users', (req, res) =>{
    return res.json({
        idade : req.query.idade,
        sexo  : req.query.sexo,
        email : req.query.email
    });
});

//Methodo POST // Create -- Gravação
//Formulario de login e senha  por exemplo
// vai enviar o login e a senha no corpo da requisição
routes.post('/users', (req, res) => {
    return res.json(req.body); 
});

//Mehodo PUT é usado para fazer o update para atualizar os dados do banco de dados
// localhost:3000/users/5
routes.put('/users/:id', (req, res) =>{
    return res.json({
        id   : req.params.id,
        body : req.body
    });
});

//Methodo Delete - Serve para deletar um registro
routes.delete('/users/:id', (req, res)=>{
    return res.json({ id : req.params.id });
});

module.exports = routes;