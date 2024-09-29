
const Item=require("../models/ItemModel")


const getAllItem=async (req,res)=>{
    const result = await Item.find().sort({createdAt:-1})
    res.status(200).json(result)
}

const searchItem=async (req,res)=>{
    const {q}=req.query;
     try {
        let items;
        if(q){
             items=await Item.find({name:{$regex:q,$options:'i'}})
        }
        res.status(200).json(items)
     } catch (error) {
        res.status(500).json({
            success: false,
            message: "Item not found",
        })
        
     }
}
const getSingleItem = async (req,res)=>{
    const {id}=req.params;
     try {
        const item=await Item.findById(id);
        res.json(item);
     } catch (error) {
        res.status(404).json({
            success: false,
            message: "Item not found",
        })
        
     }
}

module.exports={
    getAllItem,
    searchItem,
    getSingleItem
 }