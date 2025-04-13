import React from 'react'

const HomeHero = () => {
  return (
    <section className="bg-rose-500 flex justify-center p-5 md:p-7 lg:p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
        <div className="md:col-span-2">
          <input
            type="search"
            placeholder="Enter Product Name"
            className="w-full rounded radio p-3 bg-white text-black  border-0"
          />
        </div>
        <div className="md:col-span-1">
          <button className="w-full rounded radio p-3 border-2 border-white bg-rose-500 text-white">
            Search
          </button>
          </div>
      </div>
    </section>
  );
}

export default HomeHero