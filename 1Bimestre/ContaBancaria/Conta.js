var Conta = function(){
    this.agencia;
    this.conta;
    this.senha;
    this.saldo = 0;
}

Conta.prototype.comparaSenha = function(senha){
    if(this.senha == senha){
        return true;
        console.log('senha correta');
    } else {
        return false;
        console.log('senha incorreta');
    }
}   

Conta.prototype.deposito = function(valor){
    this.saldo = this.saldo + valor;
}

Conta.prototype.saque = function(valor){
    if(valor <= this.saldo){
        this.saldo = this.saldo + valor;
    }else{
        console.log('saldo insuficiente')
    }
}
module.exports  = Conta;