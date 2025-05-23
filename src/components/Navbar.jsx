import  { useState } from 'react';
import { SignedIn, UserButton } from '@clerk/clerk-react';

export default function Navbar({setActiveTab,activeTab}) {

  const navItems = ['Random', 'Tech', 'Business', 'Movies'];

  return (
    <div className="backdrop-blur-md flex items-center justify-around w-[400px] hover:w-[500px] md:w-[500px] h-[40px] rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.35),5px_10px_15px_rgba(0,73,144,0.5)] border transition-all duration-500 md:hover:w-[700px]">
      {navItems.map(item => (
        <button
          key={item}
          onClick={() => setActiveTab(item)}
          className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:-translate-y-1 transition-all duration-300 
            ${ activeTab === item ? 'bg-purple-700 font-bold' : 'text-black'}`}>

          <p className="w-5 h-5">{item}</p>
        </button>
      ))}

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
