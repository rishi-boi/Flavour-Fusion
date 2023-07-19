import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          
          <Link to='/' className="ml-3 text-xl">Flavour Fusion</Link>
        </p>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/category" className="mr-5 hover:text-gray-900">Category</a>
          <a href="/saved" className="mr-5 hover:text-gray-900">Saved Recipes</a>
          <a href="/explore" className="mr-5 hover:text-gray-900">Explore</a>
        </nav>
        <button className="inline-flex items-center hover:bg-input border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 mx-1">
          Login
        </button>
        <button className="inline-flex items-center bg-input border-0 py-1 px-3 focus:outline-none hover:bg-secondary rounded text-base mt-4 md:mt-0 mx-1">
          Signup
        </button>
      </div>
    </header>
  );
};

export default Navbar;
