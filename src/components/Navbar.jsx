import React from 'react';

const Navbar = ({ searchQuery, setSearchQuery }) => {

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-4">

        <div className='shrink-0'>
            <h1 className="text-2xl font-bold text-blue-600 tracking-tight cursor-pointer">
               Data<span className="text-gray-800">Explorer</span>
        </h1>
        </div>
       
       <div className='grow flex justify-center w-full'>
            <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search products by title..."
            className="w-full border border-gray-300 rounded-full py-2 px-12
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-transparent transition-all shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="absolute left-4 top-2.5 text-gray-400 text-lg">🔍</span>
        </div>
       </div>

       <div className='hidden md:block w-37.5'></div>
        
      </div>
    </nav>
  );
};

export default Navbar;