const router = require("express").Router();
const { User, validate } = require("../models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secretKey = process.env.JWTPRIVATEKEY

const authenticateToken = (req, res, next) => {
	console.log("Authorization started")
	const token = req.header('Authorization');

	if (!token) return res.status(401).json({ message: 'Unauthorized' });

	jwt.verify(token, secretKey, (err, decoded) => {
		if (err) return res.status(403).json({ message: 'Invalid token' });
		console.log(decoded)
		req.userId = decoded._id;
		console.log(req.userId)
		next();
	});
};

// router.get("/", async (req, res) => {
// 	const users = await User.find({})
// 	res.send(users)
// });

router.get("/", authenticateToken, async (req, res) => {
	const userId = req.userId;
	console.log("userId: " + userId)
	const user = await User.findOne({ _id: userId})
	const firstName = user.firstName
	console.log(firstName)
	if (!firstName) return res.status(404).json({ message: 'User not found' });
	res.send(user);
})

module.exports = router;