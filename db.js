module.exports = {
	//'url' : 'mongodb://<dbuser>:<dbpassword>@novus.modulusmongo.net:27017/<dbName>'
	'url' : process.env.MONGOLAB_URI || 'mongodb://localhost/psi'
}