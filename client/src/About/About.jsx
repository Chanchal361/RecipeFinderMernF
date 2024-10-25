// import React from "react";

// const About = () => {
//   return (
//     <div className="bg-gray-400 min-h-screen text-white flex items-center justify-center">
//       <div className="bg-white text-blue-900 p-8 rounded-lg shadow-lg max-w-4xl">
//         <h1 className="text-4xl font-bold mb-4 text-center">About Our Recipe finder App</h1>

//         <p className="text-lg mb-4">
//           Welcome to our <span className="font-bold">Recipe Management System</span>, your go-to app for organizing, creating, and sharing recipes! Built using the latest technologies like <span className="font-bold">React</span> and <span className="font-bold">Tailwind CSS</span>, our app provides a seamless experience for both novice and experienced cooks. Whether you want to manage family recipes, create new ones, or explore new cooking ideas, this app has everything you need.
//         </p>

//         <h2 className="text-2xl font-bold mb-2">Key Features:</h2>

//         <ul className="list-disc list-inside mb-4 text-lg">
//           <li><span className="font-bold">Add Recipes Easily:</span> Use our simple form to enter recipe details like name, category, preparation and cooking time, servings, and difficulty level.</li>
//           <li><span className="font-bold">Ingredient Management:</span> Dynamically add ingredients and their quantities to each recipe, ensuring precision in your cooking.</li>
//           <li><span className="font-bold">Step-by-Step Instructions:</span> Enter detailed cooking instructions to guide users through your recipes effortlessly.</li>
//           <li><span className="font-bold">Thumbnail Support:</span> Upload a thumbnail image for each recipe to give users a visual preview of the final dish.</li>
//           <li><span className="font-bold">Tags for Easy Search:</span> Add tags like "vegan", "dessert", or "quick" to make your recipes searchable and easy to find.</li>
//           <li><span className="font-bold">Responsive Design:</span> The app is fully responsive, built using Tailwind CSS, making it look great on any device, whether it's a mobile phone, tablet, or desktop.</li>
//         </ul>

//         <h2 className="text-2xl font-bold mb-2">Why Use Our App?</h2>

//         <p className="text-lg mb-4">
//           Our Recipe Management System is designed for ease of use and flexibility. Whether you're a professional chef or a home cook, this app will help you:
//         </p>

//         <ul className="list-disc list-inside mb-4 text-lg">
//           <li>Keep all your recipes organized in one place.</li>
//           <li>Easily edit or update your recipes as you experiment and refine them.</li>
//           <li>Share your favorite recipes with others or explore new ones from the community.</li>
//           <li>Track cooking times, ingredient lists, and more with just a few clicks.</li>
//         </ul>

//         <p className="text-lg mb-4">
//           We hope you enjoy using our Recipe Management App and find it useful in your culinary journey!
//         </p>

//         <p className="text-lg font-semibold text-center">
//           Get started today and make cooking easier, organized, and fun!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-200 mt-8 rounded-md ">
            <h1 className="text-3xl text-green-300 font-bold text-center mb-6">About RecipeFinder System</h1>
            <p className="text-lg mb-4">
                The Recipe Management System is a comprehensive web application designed to help users create, view, and manage their recipes efficiently. Built with a modern tech stack, the system offers a seamless user experience with a focus on ease of use and accessibility.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-black">Frontend Features</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
                <li><strong>Recipe Form:</strong> Users can create a new recipe by filling out an intuitive form that captures essential details like recipe name, category, thumbnail image, preparation time, servings, difficulty level, ingredients, and instructions.</li>
                <li><strong>Ingredient Management:</strong> Dynamically add or remove ingredients and their quantities for flexibility in complex recipes.</li>
                <li><strong>Responsive Design:</strong> Built using Tailwind CSS, the app features a fully responsive design that works across devices.</li>
                <li><strong>Clean UI:</strong> A modern interface with professional color schemes provides a user-friendly experience.</li>
                <li><strong>State Management:</strong> Utilizes React Hooks (`useState`) for dynamic form input management and real-time updates.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Backend Features</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
                <li><strong>API Endpoints:</strong> Built with Node.js and Express, providing RESTful API endpoints for CRUD operations.</li>
                <li><strong>Create Recipe:</strong> Store recipe information, including ingredients, cooking instructions, and meta information.</li>
                <li><strong>Read Recipe:</strong> Fetch recipe details, including ingredients, tags, and instructions.</li>
                <li><strong>Update Recipe:</strong> Edit any aspect of the recipe after creation.</li>
                <li><strong>Delete Recipe:</strong> Remove recipes when no longer needed.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Data Management</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
                <li><strong>MongoDB:</strong> NoSQL database for storing recipes and ingredients, with each recipe as a document.</li>
                <li><strong>Data Validation:</strong> Ensures required fields are validated on both the client and server sides.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Full CRUD functionality for managing recipes.</li>
                <li>Secure data storage using MongoDB.</li>
                <li>Real-time form updates for dynamic user experience.</li>
                <li>Dynamic ingredient management for flexible recipe creation.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
            <p className="text-lg text-gray-700 mb-4">
                This application is built using the following technologies:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
                <li><strong>Frontend:</strong> React, Tailwind CSS</li>
                <li><strong>Backend:</strong> Node.js, Express, MongoDB, Mongoose</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Get Started!</h2>
            <p className="text-lg text-gray-700">
                Start managing your recipes today by creating an account and exploring the features of our Recipe Management System!
            </p>
        </div>
    );
};

export default About;



