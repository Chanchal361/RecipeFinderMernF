const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({});
// process.env.jwt_secret

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  // Check if user already exists
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      console.log("Login Page Not Found");
      // Save user to the database
      const hashPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, email, password: hashPassword });
      await user.save();
      res.json({ message: "User registered successfully", user });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.error(error);
  }
  // console.log(req.body);
  // res.json({ name: name, gmail: gmail, password: password });
};

const loginUser = async (req, res) => {
  const {email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).json({ message: "User not exists" });
    } else {
        const isMatch = await bcrypt.compare(password, userExists.password);
        if (!isMatch) {
          return res.status(400).json({ message: "Incorrect password" });
        }

        const token=jwt.sign({useId:userExists._id},process.env.jwt_secret,{
            expiresIn:'1d',
        });

         res.json({ message: `Welcome ${userExists.name}`, user: userExists,token ,userId:userExists._id});
         console.log("Signed in successfully")
        
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error at login" });
    console.error(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
