const { Router } = require("express");
const {Admin, User, Course} = require('../db')
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.headers.username
    const password = req.headers.password

    await Admin.create({
        username : username,
        password : password
    })
    res.json({
        message: 'Admin created successfully'
    })


});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const imageLink = req.body.imageLink

    const course = await Course.create({
        title,
        description,
        price,
        imageLink
    })
      res.json({
        message: 'Course created successfully', courseId: course._id
      })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({})
    res.json(courses)
});

module.exports = router;