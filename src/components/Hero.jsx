// import {HERO_CONTENT} from '../constants'
import profilePic from "../assets/NP.png"
import { delay, motion } from "framer-motion"
import { useState,useEffect } from "react"

const container =(delay)=>({
  hidden:{x:-100, opacity: 0},
  visible:{
    x:0,
    opacity: 1,
    transition:{duration:0.5,delay},
  },
})

const Hero = () => {
  const [displayedText, setDisplayedText] = useState(""); // State for the displayed text
  const fullText = "a Full stack developer"; // Initial text
  const alternateText = "a Software Developer"; // Alternate text
  const additionalText = "a Java and Spring Boot Developer";
  const typingSpeed = 100; // Speed of typing effect
  const pauseDuration = 3000; // Pause duration before switching text

  useEffect(() => {
    let index = 0; // Index for typing effect
    let currentText = fullText; // Start with the initial text

    const typeText = () => {
      if (index < currentText.length) {
        setDisplayedText(currentText.slice(0, index + 1)); // Update displayed text
        index++;
        setTimeout(typeText, typingSpeed); // Continue typing
      } else {
        setTimeout(() => {
          // Pause before switching text
          currentText = currentText === fullText ? alternateText : 
                         currentText === alternateText ? additionalText : 
                         fullText; // Switch text
          index = 0; // Reset index for new text
          typeText(); // Start typing new text
        }, pauseDuration);
      }
    };

    typeText(); // Start typing effect

    return () => clearTimeout(typeText); // Cleanup on unmount
  }, []);

  return (
    <div className=" border-b border-neutral-900 pb-4 lg:mb-35">
    <div className=" flex flex-wrap">
        <div className=" w-full lg:w-1/2">
            <div className=" flex flex-col items-center lg:items-start ">
                <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-5 text-4xl  tracking-tight lg:mt-12 lg:text-7xl bg-gradient-to-r from-pink-500 to via-slate-600 to-purple-700 bg-clip-text text-3xl tracking-tight text-transparent"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to via-slate-600 to-purple-700  lg:text-3xl text-2xl">Welcome to my world</span> <br /> Hi, I'm <br/> Nagandhra Prasad Pasupathy 
                </motion.h1>
                <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="pb-16 font-bold bg-gradient-to-r from-purple-700 to via-slate-900 to-pink-700 bg-clip-text lg:text-5xl text-3xl pt-0tracking-tight text-transparent">{displayedText}
                </motion.span>
                {/* <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className='my-2 max-w-xl py-6 font-dark tracking-tighter'></motion.p> */}
            
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
        <div className=' flex justify-center  '>
            <motion.img 
            initial={{x:100,opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1 , delay:1.2}}
            src={profilePic} alt="NP" className='  rounded-3xl ' />
        </div>
        </div>
    </div>  
    </div>
  )
}

export default Hero