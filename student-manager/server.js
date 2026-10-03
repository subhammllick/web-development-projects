// Server Connection

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Student = require("./models/Student");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static("frontend"));

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("mongoDb connected successfully");
    })
    .catch((error) => {
        console.log("MongoDb failed connection");
        console.log(error.message);
    });

app.post("/students", async (req, res) => {
    try {
        const student = new Student(req.body);

        await student.save();

        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();

        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

app.listen(5000, () => {
    console.log("server running on port 5000");
});