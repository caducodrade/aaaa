var Conta = require('./Conta.js');
var Poupanca = require('./Poupanca.js');

var conta =  new Conta();
var conta1 = new Conta();
conta1.deposito(105);
conta1.saque(1000);

var p = new Poupanca();
p.deposito(10);
p.getSaldo();
