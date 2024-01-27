require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db/conn");
const userRoutes = require("./routes/usersRouter");
const authRoutes = require("./routes/authRouter");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// // routes
app.use("/", userRoutes);
app.use("/auth", authRoutes);

const port = process.env.PORT || 3001;
app.listen(port, console.log(`Listening on port ${port}...`));