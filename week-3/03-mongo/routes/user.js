const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {Admin, User, Course} = require('../db');
const { default: mongoose } = require("mongoose");


// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.headers.username
    const password = req.headers.password

    await User.create({
        username : username,
        password : password
    })
    res.json({
        message: 'User created successfully'
    })
});

router.get('/courses',async (req, res) => {
    const courses = await Course.find({})
    res.json(courses)
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router