import React from 'react'

function Navbar() {
  return (
    <>
    <div className="sticky left-1/4 my-5 px-8 py-5 bg-white/30 w-1/2 rounded-xl backdrop-blur-sm flex items-center justify-between">
            <ul className="flex gap-3">
              <li className="text-lg text-white tracking-wide ">Product</li>
              <li className="text-lg text-white tracking-wide ">History</li>
              <li className="text-lg text-white tracking-wide ">Contact</li>
            </ul>
            <h1 className='text-white text-3xl font-extrabold '>LearnCoin</h1>
            <ul className="flex gap-3">
              <li><button className=" px-3 py-2 text-white rounded-xl">Sign In</button></li>
              <li><button className=" px-3 py-2 text-white rounded-xl bg-[#8b5cf6]">Try Free</button></li>
            </ul>
          </div>
    </>
  )
}

export default Navbar