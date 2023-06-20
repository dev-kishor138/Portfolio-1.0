import React from "react";
import {BsArrowUpRight} from "react-icons/bs"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Web Developer",
    details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, vero?",
    link: "Learn More"
  },
  {
    name: "Web Developer",
    details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, vero?",
    link: "Learn More"
  },
  {
    name: "Web Developer",
    details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, vero?",
    link: "Learn More"
  },
  {
    name: "Web Developer",
    details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, vero?",
    link: "Learn More"
  },
  
]
const Services = () => {
  return (
    <section className="section lg:mt-40" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
           variants={fadeIn("right", 0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, adipisci!
            </h3>
            <button className="btn btn-sm">See My Work</button>
          </motion.div>
          {/* Services */}
          <motion.div
             variants={fadeIn("left", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.3 }}className="flex-1">
            {/* services list */}
            <div>
              {
                services.map((service, index) => {
                  // destructuring service 
                  const {name, details, link} = service
                  return (
                    <div className="border-b border-white/20 h-[146px] mb-[38px] flex" key={index}>
                      <div className="max-w-[475px]">
                        <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                        <p className="font-secondary leading-light">{ details}</p>
                      </div>
                      <div className="flex flex-col flex-1 items-end">
                        <a className="btn w-9 h-9 mb-[42] flex justify-center items-center" href="#">
                          <BsArrowUpRight/>
                        </a>
                        <a href="#">
                          {link}
                        </a>
                      </div>
                    </div>
                  )
                } )
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
