const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");
const {Admin, User, Course} = require('../db')

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

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

   const user = await User.find({
        username:username,
        password: password
    })
    if(user){
      const token =   jwt.sign({username},JWT_SECRET)
      res.json({
        token
    })
    }else{
        res.json({
            msg : "invalid email or password"
        })
    }

   
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