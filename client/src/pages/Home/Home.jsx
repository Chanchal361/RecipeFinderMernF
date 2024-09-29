import React from 'react'
import Hero from '../../components/Hero'
import Category from '../Category/Category'
import FeatureSection from './FeatureSection'
import LetestRecipe from './LetestRecipe'

const Home = () => {
  return (
    <div className=' container mx-auto'>
      <div className=' flex flex-col justify-center items-center w-full py-20'>
      <Hero/>
      <Category/>
      </div>
      {/* section page  */}
      <FeatureSection/>
      {/* Latest Recipe Section */}
      <LetestRecipe/>

    </div>
  )
}

export default Home
