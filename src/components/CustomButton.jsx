import React from 'react'

export default function CustomButton({ onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="cursor-pointer relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
      >
        <span
          className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-700 rounded-full group-hover:w-56 group-hover:h-56"
        ></span>
        <span
          className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
        ></span>
        <span className="relative text-base font-semibold">SignUp</span>
      </button>

    </div>
  )
}
