import React from 'react';

function Navbar({ tags, handleFilter }) {
  return (
    <div className="bg-nature-0 px-5 flex justify-between items-center">
      <h1 className="font-extrabold">JUEGONES</h1>
      <div className="flex flex-wrap h-full">
        {tags.map((item) => (
          <button key={item} type="button" onClick={handleFilter} className="h-12 w-28 hover:bg-nature-1 focus:bg-nature-1 transition">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
