var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost/f27';


function getConn() {
	mongoose.connect(dbURI);
	mongoose.connection.on('connected', function () {
		console.log('Mongoose connected to ' + dbURI);
	});
}


exports.getConn = getConn;

exports.mongoose = mongoose;
