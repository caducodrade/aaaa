//index,show,store,update,destroy

module.exports = {
  index(req,res){
    return res.json({
        nome : req.query.nome,
        senha  : req.query.senha,
        email : req.query.email,
        status : req.query.status,
        idade : req.query.idade,
    });
  },
  show(req, res){
    return res.json({ id : req.params.id });
  },
  store(req, res){
    return res.json({mensagem : "Gravar teste "})
  },
  update(req, res){
    return res.json({
        id   : req.params.id,
        body : req.body
    });
  },
  destroy(req, res){
    return res.json({ id : req.params.id });
  }
};