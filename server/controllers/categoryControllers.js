const categoryModel = require("../models/CategoryModel")
const Item =require("../models/ItemModel")

const getCategory= async (req,res)=>{
    const {category}=req.params
    try { 
        const categoryData= await categoryModel.findOne({name:category})
        if(!categoryData){
            return res.status(404).json({message:"Category not found"})
        }
        const items=await Item.find({menuId:categoryData.menuId})
        res.json(items)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Server Error"})
        
    }
}


module.exports ={
    getCategory,
}