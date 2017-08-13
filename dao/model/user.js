var mongoose =  require("../database.js").mongoose;

var UserSchema = new mongoose.Schema({
	username: "string",
	password: "string"
});

exports.UserModel = mongoose.model("user", UserSchema, "user");