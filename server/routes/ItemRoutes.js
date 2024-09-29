const express=require('express');
const router=express.Router();
const  ItemControles =require("../controllers/ItemControles")
// Define routes
router.get('/all-items',ItemControles.getAllItem)
router.get('/items',ItemControles.searchItem)
router.get('/items/:id',ItemControles.getSingleItem)

module.exports =router;