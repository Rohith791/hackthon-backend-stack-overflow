const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const usersRoute = require("./routes/users.route");
const authRoute = require("./routes/auth.route");
const questionsRoute = require("./routes/questions.route");
const commentsRoute = require("./routes/comments.route");
const answersRoute = require("./routes/answers.route");


const username = "nithi";
const password = "nithi2509";
const cluster = "cluster0";
const dbname = "stackoverflow";

const main = async () => {

    dotenv.config();

    // Connecting to mongoDb Atlas
 
 mongoose.connect('mongodb+srv://nithi:<nithi2509>@cluster0.cluz4.mongodb.net/stackoverflow?retryWrites=true&w=majority',
    // mongoose.connect(process.env.MONGO_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );

    const app = express();

    // Middlewares
    app.use(cors({
        origin: process.env.FRONTEND
    }));

    app.use(express.json());
    app.use(helmet());
    app.use(morgan("common"));

    app.use("/auth", authRoute);

    app.use("/users", usersRoute);

    app.use("/questions", questionsRoute);

    app.use("/comments", commentsRoute);

    app.use("/answers", answersRoute); 

    app.listen(process.env.PORT || 3001, () => {
        console.log("Server running!");
    });
}

main();