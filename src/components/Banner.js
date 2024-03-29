import React from "react";
// image import
import avatar from "../assets/photo1.png";
import avatarBg from "../assets/photo2.png";
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
    <section
      className="min-h-[85vh] lg:min-h-[78vh] lg:mb-5 flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text  */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[100px]"
            >
              OLIVIA <span>SPARKLE</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={["Developer", 2000, "Designer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quas animi, fuga aspernatur quasi quo sed eligendi error qui
              maiores?
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact me</button>
              <a href="/" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/* social */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex tex-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="/">
                <FaFacebook />
              </a>
              <a href="/">
                <FaLinkedin />
              </a>
              <a href="/">
                <FaGithub />
              </a>
            </motion.div>
          </div>
          {/* image  */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[420px]"
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-[#ff56f6] to-[#406aff] h-[500px] w-[500px] rounded-full">
              <img
                src={avatar}
                className="h-full absolute left-0 top-0 right-0 bottom-0 m-auto"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
