import React from "react";

function Searchbar() {
  return (
    <div className="flex justify-center h-8 bg-gray-800 mx-auto max-w-7xl">
      <div className="flex flex-col justify-center w-1/2">
        <input
          type="search"
          placeholder="Search..."
          aria-label="Search"
          className="h-5 px-2 text-gray-900 bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:text-zinc-300 text-sm"
        />
      </div>
    </div>
  );
}

export default Searchbar;
