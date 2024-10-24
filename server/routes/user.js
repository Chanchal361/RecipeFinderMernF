const express = require("express");
const router = express.Router();
const UserControllers  =require("../controllers/UserControllers")

const Authenticate=require("../middleware/auth")

router.post("/register",UserControllers.registerUser)
//  login user

router.post("/login",UserControllers.loginUser)

module.exports = router;
     