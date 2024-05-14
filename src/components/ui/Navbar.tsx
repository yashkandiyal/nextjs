import React from "react";
import { Button } from "./button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b-2 border-gray-300">
      <div className="max-w-8xl py-3 flex items-center mx-auto justify-around ">
        <div id="left" className="font-bold uppercase text-xl text-orange-400">
          <Link href={"/"} >Coder's Book</Link>  
        </div>
        <div id="right" className="flex items-center gap-6">
          <Button className="border-2 border-orange-400 font-semibold rounded-xl text-orange-400 ">
            Sign up
          </Button>
          <Button className="bg-orange-400 rounded-xl text-white font-semibold hover:bg-orange-600">
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
