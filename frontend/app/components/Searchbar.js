"use client";
import React from "react";

function Searchbar() {
  const [search, setSearch] = React.useState("");
  const [showSearch, setShowSearch] = React.useState(false);
  React.useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div className="flex justify-center h-8 bg-gray-800 mx-auto max-w-7xl">
      <div className="flex flex-col justify-center w-1/2">
        <input
          type="search"
          placeholder="Search..."
          aria-label="Search"
          className="h-5 px-2 text-gray-900 bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:text-zinc-300 text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={() => setShowSearch(false)}
          onFocus={() => setShowSearch(true)}
        />
      </div>

      {showSearch===true && 
      <div className="flex flex-col justify-start absolute top-8 w-1/2 origin-top-right 
                    p-2
                    bg-slate-300 rounded-md shadow-lg text-stone-800
                    transition ease-out duration-100 data-closed:translate-y-1 data-open:transform">
        <ul>
          <li>{search}</li>
          <li>Result 1</li>
          <li>Result 2</li>
        </ul>
      </div>
}
    </div>
  );
}

export default Searchbar;
