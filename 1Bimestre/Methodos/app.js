const express = require('express')
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

//este exemplo é o mesmo da segundo exemplo só que simpificado
//app.get('/', (req, res) => res.send('Hello World!'));

//este exemplo completo de uma reuqisição simples
app.get('/',function(req, res){
    res.send("Hello word");
})

//Get => Buscar info -- Select para listagem de infos
//req.query = acessar a query ou params (filtros)
//localhost:3000/?idade=37&sexo=M
app.get('/users', (req, res) =>{
    return res.json({
        idade : req.query.idade,
        sexo  : req.query.sexo
    });
});

//Methodo POST // Create -- Gravação
//Formulario de login e senha  por exemplo
// vai enviar o login e a senha no corpo da requisição
app.post('/users', (req, res) => {
    return res.json({
        login : res.body.login,
        pass  : res.body.password
    });
});

//Mehodo PUT é usado para fazer o update para atualizar os dados do banco de dados
// localhost:3000/users/5
app.put('/users/:id', (req, res) =>{
    return res.json({
        id   : res.params.id,
        body : res.params.body
    });
});

//Methodo Delete - Serve para deletar um registro
app.delete('/users/:id', (req, res)=>{
    return res.json({ id : req.params.id });
});

//Acessar site da Atlas Mongo DB - Criar uma conta e criar um cluster Free 

//imprime no console qua a porta e qual o server que esta rodando aaplicação
app.listen(port, hostname,()=>{
    console.log(`Servidor rodando na porta ${port} em ${hostname}`);
})