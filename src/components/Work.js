import React from "react";
import image1 from "../assets/portfolio-img1.png";
import image2 from "../assets/portfolio-img2.png";
import image3 from "../assets/portfolio-img3.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Work = () => {
  return (
    <section className="section lg:mt-40" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text  */}
            <div className="mb-6">
              <h2 className="h2 leading-light text-accent">
                My Latest <br /> Work
              </h2>
              <p className="max-w-sm mb-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet, consectetur Ut earum in temporibus autem reiciendis porro suscipit ab consequuntur molestiae amet!
              </p>
              <button className="btn btn-sm">View All Projects</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full  absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
              className="group-hover:scale-125 transition-all duration-500"  src={image1} alt="" />
              {/* preTitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Projects</span>
              </div>
              {/* title  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10">
            {/* image  */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full  absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
              className="group-hover:scale-125 transition-all duration-500"  src={image2} alt="" />
              {/* preTitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Projects</span>
              </div>
              {/* title  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">project Title</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full  absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
              className="group-hover:scale-125 transition-all duration-500"  src={image3} alt="" />
              {/* preTitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Projects</span>
              </div>
              {/* title  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
