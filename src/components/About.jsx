import aboutImg from "../assets/about.png"
import { ABOUT_TEXT } from "../constants"
import {  motion } from "framer-motion"

const About = () => {
  return (
    <div className=" border-b border-neutral-900 pb-1 ">
        <h1 className='my-20 text-center text-4xl text-200 bg-gradient-to-r from-pink-800  to-purple-500 bg-clip-text text-transparent'> About
            <span className=' text-200'> me</span>
        </h1>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100 }}
        transition={{duration:0.5}}
        className=' flex flex-wrap'>
            <div className=' w-full lg:w-1/2 lg:p-6'>
            <div className='flex items-center justify-center '>
            <img className=" rounded-3xl h-80 my-auto "  src={aboutImg} alt="about" />
            </div>
            </div>
            <motion.div className=" w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                <p className=" my-12 max-w-xl py-6 font-bold text-purple-600 ">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default About