const Item = require("../models/ItemModel");
const saveSchema = require("../models/SaveModel");

const getAllItem = async (req, res) => {
  const result = await Item.find().sort({ createdAt: -1 });
  res.status(200).json(result);
};

const searchItem = async (req, res) => {
  const { q } = req.query;
  try {
    let items;
    if (q) {
      items = await Item.find({ name: { $regex: q, $options: "i" } });
    }
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Item not found",
    });
  }
};
const getSingleItem = async (req, res) => {
  const  id  = req.params.id;
  // console.log(id);
  try {
    const item = await Item.findById(id);
    if (!item)
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    res.json(item);
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Item not found",
    });
  }
};

// const saveRecipeById = async (req, res) => {
//   const  id  = req.params.id;
//   // const {recipeId}=req.body;
//   try {
//     const item = await saveSchema.findOne({ recipe: id });
//     if (item) {
//       return res.status(404).json({
//         success: false,
//         message: "Item  already Saved",
//       });
//     } else {
//       item = await saveSchema.create({ recipe: id });

//       res.json({ message: "Recipe saved successfully", item });
//     }
//   } catch (error) {
//     res.json({
//       success: false,
//       message: "error while saving recipe",
//     });
//   }
// };

const GetSavedRecipe = async (req, res) => {
    const recipe =await saveSchema.find()
    res.json(recipe)
}

module.exports = {
  getAllItem,
  searchItem,
  getSingleItem,
  // saveRecipeById,
  GetSavedRecipe,
};
