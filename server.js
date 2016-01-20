var connect = require('connect');
var server = require('serve-static');
connect().use(server(__dirname)).listen(80, '0.0.0.0', function () {
	console.log("success");	
});
