import { RiReactjsLine } from "react-icons/ri"
import { SiAngular } from "react-icons/si";
import { SiMongodb } from "react-icons/si"
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa"
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { SiFramer } from "react-icons/si";


import { TbBrandJavascript } from "react-icons/tb";


import {  animate, motion } from "framer-motion"

const iconvariants =(duration)=> ({
    initial:{y:-10},
    animate:{
        y:[10, -10],
    
    transition :{
        duration:duration,
        ease: "linear",
        repeat:Infinity,
        repeatType:"reverse"
    }
}
})

const Technologies = () => {
  return (
    <div className=" border-b border-purple-800 pb-24">
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className=" my-20 text-center text-5xl text-200 "> Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className=" flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconvariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-purple-300 p-4">
            <RiReactjsLine className=" text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconvariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-purple-300 p-4">
            <SiAngular className=" text-red-600 text-7xl"/>
        </motion.div>
        <motion.div
        variants={iconvariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-purple-300 p-4">
            <SiMongodb className=" text-7xl text-green-500"/>
        </motion.div>
        <motion.div
        variants={iconvariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-purple-300 p-4">
            <SiMysql className=" text-7xl text-sky-700"/>
        </motion.div>
        <motion.div 
        variants={iconvariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-purple-300 p-4">
            <FaNodeJs className=" text-7xl text-green-500"/>
        </motion.div>
        <motion.div 
        variants={iconvariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-purple-300 p-4">
            <FaJava className=" text-7xl text-grey-700"/>
        </motion.div>
        <motion.div 
        variants={iconvariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-purple-300 p-4">
            <SiSpringboot className=" text-7xl text-sky-700"/>
        </motion.div>
        <motion.div 
        variants={iconvariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-purple-300 p-4">
            <SiFramer className=" text-7xl text-white-700"/>
        </motion.div>
        <motion.div 
        variants={iconvariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-purple-300 p-4">
            < TbBrandJavascript className=" text-7xl text-yellow-300"/>
        </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies