const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        minlength: 4,
        maxlength: 50,
        required: true,
        trim: true

    },
    userName: {
        type: String,
        minlength: 3,
        maxlength: 12,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        maxlength: 50,
        unique: true,
        required: true,
        trim: true
    },

    password: {
        type: String,
        minlength: 6,
        maxlength: 100,
        required: true,
        trim: true
    },
    qualification: {
        type: String,
        minlength: 3,
        maxlength: 50,
        default: "N/A",
        trim: true
    },
    yearOfPassing: {
        type: String,
        minlength: 3,
        maxlength: 20,
        default: "N/A",
        trim: true
    },
    yearsOfExperience: {
        type: String,
        minlength: 1,
        maxlength: 15,
        default: "N/A",
        trim: true
    },
    profilePicture: {
        type: String,
        default: "https://res.cloudinary.com/hiddencloud1111/image/upload/v1634630235/defaultProfilePic_xlwkzb.png",
    },
    userQuestions: [{
        type: mongoose.Schema.ObjectId,
        ref: "Question"
    }]
    ,
    userAnswers: [{
        type: mongoose.Schema.ObjectId,
        ref: "Answer"
    }]

}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema, "users");