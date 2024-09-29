import React from 'react'

const Search = () => {
  return (
    <div className=' container h-full w-full px-5 py-5'>
      {/* <form action="/seach" */}
       {/* className='bg-green-300 relative rounded-md flex items-center'
      > */}
       <input 
       className='w-full px-3 py-2  outline-none text-gray-700 rounded-md'
       type="search" placeholder='enter kucch bhi ' 
        name="query"
        id='search'
       /> 
      {/* </form> */}

      <form 
      className=" p-4 rounded-full h-screen relative flex items-center justify-center"
      action="/search">
        {/* <IoSearchOutline className="w-5 h-5 mr-2 text-neutral-300" /> */}
        <input
        className=" outline-none  placeholder:text-[#1b2629] h-8 max-w-xs "
          type="search"
          name="query"
          placeholder="Search for a recipe"
          id="search"
          required
        />
      </form>
    </div>
  )
}

export default Search
