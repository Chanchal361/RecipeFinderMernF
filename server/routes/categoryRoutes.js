const express = require("express");
const getCategor=require("../controllers/categoryControllers")

const router = express.Router();

router.get('/categories/:category',getCategor.getCategory);

module.exports = router;
