// import React from "react";
// import { Link } from "react-router-dom";
// import { GoClock } from "react-icons/go";

// const Cards = ({ item }) => {
//   return (
//     <div className=" max-w-sm">
//       <div className=" bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
//         <img
//           src={item.thumbnail_image}
//           alt="thumbnail"
//           className=" rounded-t-lg"
//         />
//         <div className=" py-6 px-5 rounded-lg bg-white">
//           <Link to={`/items/${item._id}`}>
//             <h2 className=" text-gray-700 font-bold text-2xl mb-8 hover:text-gray-900 hover:cursor-pointer ">
//               {item?.name}
//             </h2>
//           </Link>
//           <div className=" flex justify-between items-center flex-wrap">
//             <button
//               className={`mt-6 py-2 px-4 font-medium rounded-lg shadow-md
//                     hover:shadow-lg transition duration-300 bg-green-300`}
//             >
//               {item?.category}
//             </button>

//             <div className=" flex items-center py-2 mt-6">
//               <GoClock />
//               <span className="ml-1">{item.more[0].prep_time}</span>
//             </div>
//           </div>
//         </div>
//         <div className=" absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
//           <span className="font-medium">{item.more[0].difficulty}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;