exports.file 		= require('./file.js').main;
exports.stack 		= require('./stack.js').main;
exports.crypto 		= require('./crypto.js').main;
exports.apps 		= require('./apps.js').main;
exports.mongo 		= require('./mongo.js').main(exports);
exports.utils 		= require('./utils.js').main;
exports.Mailstack 	= require('./mailstack.js').main;
exports.uuid 		= require('./uuid.js');

exports.Arbiter 	= new (require('./Arbiter.js').main)();


// Api
var api				= require('./api.js').main;
exports.api			= new api(this);

// Hooks
var hook			= require('./hook.js').main;
exports.hook		= new hook(this);

// Validators
var validator		= require('./validator.js').main;
exports.validator	= new validator(this);

// Settings
exports.settings	= {};

exports.log			= function(label, value) {
	console.log("\033[35m ["+label+"]:\033[37m",JSON.stringify(value,null,4))
};

// Metas
exports.version		= "1.7.2";