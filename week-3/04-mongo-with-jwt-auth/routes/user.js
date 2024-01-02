const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {Admin, User, Course} = require('../db')
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");



// User Routes
router.post('/signup', async (req, res) => {
    const username = req.headers.username
    const password = req.headers.password

    await User.create({
        username : username,
        password : password
    })
       
    res.json({
        message: 'user created successfully'
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

router.get('/courses',async (req, res) => {
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

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.username;

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
    const user = await User.findOne({
        username: req.username
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