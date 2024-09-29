import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer";

const SingleProduct = () => {
  const item = useLoaderData();
  useEffect(()=>{
     window.scrollTo(0, 0);
  },[])

  return (
    <>
      <Header />
      <section className=" min-h-dvh md:flex justify-center items-center md:bg-">
        <article>
          <div className="bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl">
            <picture>
              <img
                src={item.thumbnail_image}
                alt="f"
                className="md:max-w-[90%] w-full md:rounded-xl md:mx-auto md:h-[570px]"
              />
            </picture>
            <div className="px-8">
              <h1 className="text-4xl mt-12 text-secondary">{item.name}</h1>
              <p>An Easy and quick dish ,perfect for any meal,This classi</p>

              <article className="bg-rose-50 mt-6 p-5 rounded-xl">
                <h2 className="text-xl font-semibold ml-2">Preparation time</h2>
                <ul className=" list-disc mt-3 ml-8 text-lg marker:text-orange-500 ">
                  <li className="pl-3">
                    <p>
                      <span>Total:</span>
                      <span> 25 minutes</span>
                    </p>
                  </li>
                  <li className="pl-3 mt-3">
                    <p>
                      <span>Preparation:</span>
                      <span> {item?.more[0].prep_time}</span>
                    </p>
                  </li>
                  <li className="pl-3 mt-3">
                    <p>
                      <span>Cocking:</span>
                      <span> {item?.more[0].cook_time}</span>
                      {/* <span>{console.log(item)}</span> */}
                    </p>
                  </li>
                </ul>
              </article>

              <div className="mt-5">
                <h2 className="text-xl font-semibold ml-2">Ingredients</h2>
                <ul className=" list-disc marker:text-blue-500 mt-4 ml-6 text-secondary marker:align-middle">
                  {item?.ingredients.map((ingredient, index) => (
                    <li key={index} className=" pl-4 mt-2">
                      <span>{ingredient?.name}: </span>
                      <span>{ingredient?.quantity}</span>
                    </li>
                  ))}
                </ul>
              </div>


              <div className="mt-7 ">
                <h2 className="text-xl font-semibold ml-2">Instructions</h2>
                <ol className=" mt-4 ml-6 text-secondary">
                  
                <li className=" pl-4 mt-2">{item.instructions}</li>
                </ol>
              </div>
            </div>
          </div>
        </article>
      </section>
     <Footer/>
    </>
  );
};

export default SingleProduct;
