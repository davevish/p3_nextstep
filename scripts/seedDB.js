const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Adventures collection and inserts the books below
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/adventures",
	{
		useMongoClient: true
	}
);

const adventureSeed = [
	{
	name: "GT Adventure",
	location: "Georgia Tech",
	checkpoints: '33.776789, -84.388416'
	}
];

db.Adventure
	.remove({})
	.then(() => db.Adventure.collection.insertMany(adventureSeed))
	.then(data => {
		console.log(data.insertedIds.length + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
