








const express = require('express');
const router = express.Router();
const User = require("../model/usermodel")
const {
  invest,
} = require("../controller/usercontroller")



const authenticate = (req, res, next) => {
    if (req.session.user) {
        // User is authenticated
        return next();
    }
    // User is not authenticated
    res.redirect('/login'); // Redirect to login page or send an appropriate response
};

// router.get('/get-code', generateCode);

// router.post('/check-code', checkCode); // New route to check if the code is used


router.get("/index", (req, res)=>{
    res.render('index')
});

router.post('/index', invest);
// router.post('/login', logIn)

module.exports = router;