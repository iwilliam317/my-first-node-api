module.exports = function(application){
	application.get('/', function(req, res){

        /*content negotiation - attribute accept from headers*/
        res.format({
          html : function(){
		res.send('Bem vindo a sua app NodeJS!')
          },

          // json: function(){
          //   let retorno = {
          //     body: 'Bem vindo a sua app NodeJS!'
          //   }
          //   res.json(retorno)
          // }
        });
  // forcing an error
        // res.render('sdasd');
	});

  application.post('/', (req, res) => {
    let data = req.body;
 
    res.send(data);
  });

}