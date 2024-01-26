// const { MongoClient } = require("mongodb");
// const Db = process.env.ATLAS_URI;
// const client = new MongoClient(Db);

// let _db;

// module.exports = {
//   connectToServer: async function (callback) {

//     try {
//       await client.connect();
//     } catch (e) {
//       console.error(e);
//     }

//     _db = client.db("westream");

//     return (_db === undefined ? false : true);
//   },
//   getDb: function () {
//     return _db;
//   },
// };
const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.ATLAS_URI, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};