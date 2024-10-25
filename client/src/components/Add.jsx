// import React, { useState } from "react";

// const Add = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log("Form data submitted: ", formData);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-300">
//       <form
//         className="w-full max-w-md bg-white rounded-lg shadow-lg p-8"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
//           Add Recipe
//         </h2>
//         <div className="mb-4">
//           <label className="block text-gray-700">Recipe Name</label>
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Ingr</label>
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700">Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Add;

// /////////////////////////////////////////////////////////////////////////

import React, { useState } from "react";
import Header from "./header/Header";

const Add = () => {
  const [itemData, setItemData] = useState({
    menuId: "",
    name: "",
    thumbnail_image: "",
    category: "",
    instructions: "",
    tags: [""],
    ingredients: [{ name: "", quantity: "" }],
    more: { prep_time: "", cook_time: "", servings: "", difficulty: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTagChange = (index, value) => {
    const updatedTags = [...itemData.tags];
    updatedTags[index] = value;
    setItemData((prevData) => ({ ...prevData, tags: updatedTags }));
  };

  const handleIngredientChange = (index, name, value) => {
    const updatedIngredients = [...itemData.ingredients];
    updatedIngredients[index][name] = value;
    setItemData((prevData) => ({
      ...prevData,
      ingredients: updatedIngredients,
    }));
  };

  const handleMoreChange = (name, value) => {
    setItemData((prevData) => ({
      ...prevData,
      more: { ...prevData.more, [name]: value },
    }));
  };

  const addIngredient = () => {
    setItemData((prevData) => ({
      ...prevData,
      ingredients: [...prevData.ingredients, { name: "", quantity: "" }],
    }));
  };

  const addTag = () => {
    setItemData((prevData) => ({ ...prevData, tags: [...prevData.tags, ""] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", itemData);
    // Submit logic here
  };

  return (
    <div>
         <Header/>
      <div className="flex items-center justify-center min-h-screen bg-gray-300  gap-2">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-gray-100 p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Add New Item</h2>

          {/* Menu ID */}
          <div className="mb-4">
            <label className="block text-gray-700">Menu ID  <span className="text-red-500">*</span></label>
            <input
              type="number"
              name="menuId"
              value={itemData.menuId}
              onChange={handleChange}
              className="ppearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
              required
            />
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Name  <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              value={itemData.name}
              onChange={handleChange}
              className="ppearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
              required
            />
          </div>

          {/* Thumbnail Image */}
          <div className="mb-4">
            <label className="block text-gray-700">Thumbnail Image URL  <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="thumbnail_image"
              value={itemData.thumbnail_image}
              onChange={handleChange}
              className="ppearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-gray-700">Category  <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="category"
              value={itemData.category}
              onChange={handleChange}
              className="ppearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
              required
            />
          </div>

          {/* Instructions */}
          <div className="mb-4">
            <label className="block text-gray-700">Instructions  <span className="text-red-500">*</span></label>
            <textarea
              name="instructions"
              value={itemData.instructions}
              onChange={handleChange}
              className="ppearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
              required
            />
          </div>

          {/* Tags */}
          <div className="mb-4">
            <label className="block text-gray-700 underline-offset-0">Tags</label>
            {itemData.tags.map((tag, index) => (
              <input
                key={index}
                type="text"
                value={tag}
                onChange={(e) => handleTagChange(index, e.target.value)}
                className="ppearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline mb-2"
                placeholder={`Tag ${index + 1}`}
              />
            ))}
            <button
              type="button"
              onClick={addTag}
              className="text-blue-500 underline"
            >
              Add Tag
            </button>
          </div>

          {/* Ingredients */}
          <div className="mb-4">
            <label className="block text-gray-700">Ingredients  <span className="text-red-500">*</span></label>
            {itemData.ingredients.map((ingredient, index) => (
              <div key={index} className="flex mb-2 space-x-2">
                <input
                  type="text"
                  value={ingredient.name}
                  onChange={(e) =>
                    handleIngredientChange(index, "name", e.target.value)
                  }
                  placeholder="Name"
                  className="ppearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  required
                />
                <input
                  type="text"
                  value={ingredient.quantity}
                  onChange={(e) =>
                    handleIngredientChange(index, "quantity", e.target.value)
                  }
                  placeholder="Quantity"
                  className="ppearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addIngredient}
              className="text-blue-500 underline"
            >
              Add Ingredient 
            </button>
          </div>

          {/* More Details */}
          <div className="mb-4">
            <h3 className="block text-gray-700 font-semibold">More Details</h3>
            {["prep_time", "cook_time", "servings", "difficulty"].map(
              (field) => (
                <div key={field} className="mb-2">
                  <label className="block text-gray-700 capitalize">
                    {field.replace("_", " ")}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={itemData.more[field]}
                    onChange={(e) => handleMoreChange(field, e.target.value)}
                    className="ppearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                    required
                  />
                </div>
              )
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Add;

// import React, { useState } from 'react';

// const Add = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     thumbnail_image: '',
//     category: '',
//     instructions: '',
//     ingredients: [{ name: '', quantity: '' }],
//     prep_time: '',
//     cook_time: '',
//     servings: '',
//     difficulty: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleIngredientChange = (index, e) => {
//     const newIngredients = [...formData.ingredients];
//     newIngredients[index][e.target.name] = e.target.value;
//     setFormData({ ...formData, ingredients: newIngredients });
//   };

//   const handleAddIngredient = () => {
//     setFormData({ ...formData, ingredients: [...formData.ingredients, { name: '', quantity: '' }] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit form logic here
//     console.log(formData);
//   };

//   return (
//     <div className="min-h-screen bg-blue-900 flex justify-center items-center">
//       <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
//         <div className="text-center mb-6">
//           <img src="/chef-hat-icon.png" alt="recipe icon" className="mx-auto w-16" />
//           <h1 className="text-3xl font-bold text-gray-800">Add a New Recipe</h1>
//         </div>
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           {/* Recipe Name */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
//               Recipe Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
//               placeholder="Enter recipe name"
//               required
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
//               Category <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               id="category"
//               name="category"
//               value={formData.category}
//               onChange={handleInputChange}
//               className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
//               placeholder="E.g. Dessert, Main Course"
//               required
//             />
//           </div>

//           {/* Thumbnail Image */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="thumbnail_image">
//               Thumbnail Image URL
//             </label>
//             <input
//               type="text"
//               id="thumbnail_image"
//               name="thumbnail_image"
//               value={formData.thumbnail_image}
//               onChange={handleInputChange}
//               className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
//               placeholder="Enter image URL"
//             />
//           </div>

//           {/* Instructions */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="instructions">
//               Instructions <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               id="instructions"
//               name="instructions"
//               value={formData.instructions}
//               onChange={handleInputChange}
//               className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
//               placeholder="Enter cooking instructions"
//               required
//             />
//           </div>

//           {/* Ingredients */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Ingredients</label>
//             {formData.ingredients.map((ingredient, index) => (
//               <div key={index} className="grid grid-cols-2 gap-4 mb-2">
//                 <input
//                   type="text"
//                   name="name"
//                   value={ingredient.name}
//                   onChange={(e) => handleIngredientChange(index, e)}
//                   className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
//                   placeholder="Ingredient name"
//                 />
//                 <input
//                   type="text"
//                   name="quantity"
//                   value={ingredient.quantity}
//                   onChange={(e) => handleIngredientChange(index, e)}
//                   className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
//                   placeholder="Quantity"
//                 />
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={handleAddIngredient}
//               className="text-blue-500 hover:text-blue-700"
//             >
//               + Add Ingredient
//             </button>
//           </div>

//           {/* More Information */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 font-medium mb-2" htmlFor="prep_time">
//                 Prep Time <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="prep_time"
//                 name="prep_time"
//                 value={formData.prep_time}
//                 onChange={handleInputChange}
//                 className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
//                 placeholder="E.g. 15 mins"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-2" htmlFor="cook_time">
//                 Cook Time <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="cook_time"
//                 name="cook_time"
//                 value={formData.cook_time}
//                 onChange={handleInputChange}
//                 className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
//                 placeholder="E.g. 30 mins"
//                 required
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 font-medium mb-2" htmlFor="servings">
//                 Servings <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="servings"
//                 name="servings"
//                 value={formData.servings}
//                 onChange={handleInputChange}
//                 className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
//                 placeholder="E.g. 4 people"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-2" htmlFor="difficulty">
//                 Difficulty <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="difficulty"
//                 name="difficulty"
//                 value={formData.difficulty}
//                 onChange={handleInputChange}
//                 className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
//                 placeholder="E.g. Easy, Medium, Hard"
//                 required
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
//             >
//               Submit Recipe
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Add;
