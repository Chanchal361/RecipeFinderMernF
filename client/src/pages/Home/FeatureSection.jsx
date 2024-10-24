import React from "react";
import image from "../../assets/images.jpeg";
const FeatureSection = () => {
  return (
    <div className=" overflow-hidden  flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10">
      <div className=" relative">
        <img src={image} alt="" className=" rounded-lg h-96" />
        <div className=" absolute top-4 right-5 bg-white text-secondary px-3 py-1 rounded-md uppercase tracking-wider">
          Feature Recipe
        </div>
      </div>

      <div className=" text-start sm:w-1/2">
        <h2 className=" text-3xl font-semibold text-gray-300 sm:text-5xl sm:leading-relaxed">
          Pipne+Smoke pizza
        </h2>
        <p className="text-xl mt-4 text-white">
        Pipne+Smoke pizza is a delicious combination that typically features a rich, smoky flavor profile paired with vibrant, fresh toppings. The base of the pizza is usually crafted from soft, chewy dough with a slightly crisp crust, baked in a wood-fired oven to add that signature smoky essence.
        </p>
        <div className=" lg:mt-0 lg:flex-shrink-0">
          <div className=" mt-12 inline-flex">
            <button className=" py-4 px-8 hover:bg-btnColor text-white hover:text-white w-full transition ease-in  duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg ">
              View Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
