//Busca a  bibioteca http
const http = require('http');
var request = require('request');


//seta o ip ou server que sera execultado
const hostname = '127.0.0.1';

//Seta a porta que sera usada
const port = 8080;

//cria uma constante que gurdara o server
const server = http.createServer((req, res) => {
    //http://127.0.0.1:8080/
    res.statusCode = 200;

    //informe o seu cep aqui
var cep = '86183877';

request('http://viacep.com.br/ws/'+ cep +'/json/', function (error, response, body) {
  console.log('error:', error); // Print o erro que ocorreu
  console.log('statusCode:', response && response.statusCode); // Imprima o código de status da resposta se uma resposta foi recebida
  console.log('body:', JSON.parse(body)); // imprime o Json recebido
  var json = JSON.parse(body)

    res.setHeader('Content-Type', 'text/plain');
    res.end('CEP: '+ json.cep+ 
    '\n Rua: '  +  json.logradouro +
    '\n cidade:'  +  json.localidade +'  '+json.uf+
    '\n');
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
