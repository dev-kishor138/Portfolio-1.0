import React from "react";
// image import
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between">
          {/* logo */}
          <a href="/" className="text-3xl grid gap-0">
            <span className="text-gradient">Olivia</span> <span>Sparkle</span>
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
