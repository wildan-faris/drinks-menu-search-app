import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="w-full h-20 bg-green-600">
        <div className="flex justify-center items-center py-2 mx-8 md:mx-0">
          <img src="/cocktail-nav.png" alt="cocktail" width={60} />
          <h1 className="text-white font-semibold text-lg ml-4 md:ml-8 uppercase text-center">Cocktails Menu Search App</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
