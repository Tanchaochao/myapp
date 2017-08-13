


for(var i = 0; i <= 43; i++) {
	db.emp.insert({
		empName: "zhangsan" + i,
		sal: 4000 + i,
		job: "job" + i
	})
}

