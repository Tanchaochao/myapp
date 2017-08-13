var mongoose =  require("../database.js").mongoose;

var EmpSchema = new mongoose.Schema({
	empName: "string",
	sal: "number",
	job: "string"
});

exports.EmpModel = mongoose.model("emp", EmpSchema, "emp");