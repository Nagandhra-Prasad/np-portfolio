import React, { useState } from 'react';
import logo from "../assets/logo-black.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  const [redirecting, setRedirecting] = useState(false);

  const handleLinkedInClick = () => {
    setRedirecting(true);
    setTimeout(() => {
      window.location.href = "https://www.linkedin.com/in/p-nagandhra-prasad-7889b2291", "_blank";
    }, 2000); // Adjust the timeout as needed
  };

  const handleGithubClick = () => {
    setRedirecting(true);
    setTimeout(() => {
      window.location.href="https://github.com/ethanwinters05", "_blank";
    }, 2000); // Adjust the timeout as needed
  };

  const handleInstagramClick = () => {
    setRedirecting(true);
    setTimeout(() => {
      window.location.href="https://www.instagram.com/nagendra_prasad05/?igsh=Nm45cWk1eHFzOWw5&utm_source=qr", "_blank";
    }, 2000); // Adjust the timeout as needed
  };

  return (
    <nav className=" mb-10 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2  w-32" src={logo} alt="logo" />
        </div>
        <div className=" m-8 flex items-center   justify-center gap-4 text-2xl font-sans ">
          {redirecting ? (
            <div className=' text-purple-600 '>Here We Go... </div> // Replace with your loader component if needed
          ) : (
            <>
              <a onClick={handleLinkedInClick} style={{ cursor: 'pointer' }}> <FaLinkedin/></a>
              <a onClick={handleGithubClick} style={{ cursor: 'pointer' }}> <FaGithub/></a>
              <a onClick={handleInstagramClick} style={{ cursor: 'pointer' }}><FaInstagram/></a>
            </>
          )}
        </div>
    </nav>
  )
}

export default Navbar;