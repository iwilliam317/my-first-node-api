/* importar as configurações do servidor */
const app = require('./config/server');
var exports = module.exports = {};
/* parametrizar a porta de escuta */
const server = app.listen(3000, function(){
	console.log('Servidor online');
})

exports.closeServer = function(){
  server.close();
};