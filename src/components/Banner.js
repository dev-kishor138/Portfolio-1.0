import React from "react";
// image import
import avatar from "../assets/avatar.svg";
// import icons
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
// import TypeAnimation
import { TypeAnimation } from "react-type-animation";
// import Motion
import { motion } from "framer-motion";
// import variables
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        {/* text  */}
        <div>
          <h1>
            BEN <span>AIDEN</span>
          </h1>
          <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
            <span className="text-white mr-4">I am a </span>
            <TypeAnimation
              sequence={["Developer", 2000, "Designer", 2000]}
              speed={50}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
          </div>
        </div>
        {/* image  */}
        <div>
          <img src={avatar} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
