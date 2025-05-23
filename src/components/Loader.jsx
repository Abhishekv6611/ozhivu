import React from 'react'

export default function Loader() {
  return (
    <div>
<div className="flex justify-center items-center min-h-screen gap-2">
  <div className="w-4 h-4 rounded-full bg-[#d046fb] animate-bounce"></div>
  <div className="w-4 h-4 rounded-full bg-[#d046fb]  animate-bounce [animation-delay:-.3s]"></div>
  <div className="w-4 h-4 rounded-full bg-[#d046fb]  animate-bounce [animation-delay:-.5s]"></div>
</div>
    </div>
  )
}
