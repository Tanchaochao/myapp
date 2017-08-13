var mongoose = require("mongoose");
var dbURI = "mongodb://localhost/f27";

mongoose.connect(dbURI);
mongoose.connection.on("connected", function() {
    console.log("db start");
});

var MovieSchema = mongoose.Schema({
    movieName: "string",
    directors: "string",
    starringActor: "string",
    type: "string",
    country: "string",
    story: "string",
    releaseDate: "string",
    min: "string",
    seats: []
});

var SeatsSchema = mongoose.Schema({
	id: "string",
    rowNo: "string",
    colNo: "string",
    displayName: "string",
    status: "number"
});

var MovieModel = mongoose.model("movies", MovieSchema, "movies");

MovieModel.find({
	_id: "5754ee7bbae5606406000001"
}, function(err, data) {
	var arr = [11, 12];
	var seats = data[0].seats;
	for(var i = 0; i < arr.length; i++) {
		for(var j = 0; j < seats.length; j++) {
			if(arr[i] == seats[j].id) {
				seats[j].status = 1;
			}
		}
	}
	MovieModel.update({
		_id: "5754ee7bbae5606406000001"
	}, {$set: {
		seats: seats
	}}, function(err, data) {
		console.log(data);
	})
});


store

// var arr = [];

// for (var i = 1; i < 3; i++) {
//     for (var j = 1; j < 3; j++) {
//         arr.push({
//         	id: i + "" + j,
//             rowNo: i,
//             colNo: j,
//             displayName: i + "排" + j + "号",
//             status: "0"
//         })
//     }
// }


// new MovieModel({
//     movieName: "百鸟朝凤",
//     directors: "吴天明",
//     starringActor: "陶泽如,郑伟,李岷城,胡先煦,墨阳,张喜前,迟蓬,嵇波,谭群,王长玲,周天羽,袁中方,张双成,许还山,王芳",
//     type: "历史,音乐,剧情",
//     country: "中国",
//     story: "老一代唢呐艺人焦三爷是个外冷内热的老人，看起来严肃古板，其实心怀热血。影片表现了在社会变革、民心浮躁的年代里，新老两代唢呐艺人为了信念的坚守所产生的真挚的师徒情、父子情、兄弟情。",
//     releaseDate: "2016-05-06",
//     min: "108分钟",
//     seats: arr
// }).save(function(err, data) {
// 	console.log(data)
// });


