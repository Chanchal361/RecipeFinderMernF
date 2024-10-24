const express=require('express');
const router=express.Router();
const  ItemControles =require("../controllers/ItemControles")

const Authenticate=require("../middleware/auth")
// Define routes
router.get('/all-items',ItemControles.getAllItem)
router.get('/items',ItemControles.searchItem)
router.get('/items/:id',ItemControles.getSingleItem)

// saved items
// router.post('/:id',ItemControles.saveRecipeById)
// get all saved recipe items
router.get("/saved",Authenticate,ItemControles.GetSavedRecipe)

module.exports =router;