import React, {useState} from 'react';
import { navLinks } from '../../data';
import {FaBars} from "react-icons/fa";
import {FaRegWindowClose} from "react-icons/fa";
import logo from "../../assets/logo/icons8-r-key-50.png";
import NavDrop from "./NavDrop.jsx";
import {motion} from "framer-motion";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

  return (
    <div className='fixed w-screen top-0 left-0 z-40'>
        <div className='flex items-center text-mydark justify-between py-4 pr-4 pl-1 sm:pr-8 bg-gradient-to-r from-spacePurple to-spaceBlue font-medium lg:pr-10'>
            <div className='flex items-center gap-2 text-light'>
                <div className='w-8 h-8'><img src={logo} alt="R. "/></div>
                <p className='text-m text-mylight text-opacity-90'>Portfolio</p>
            </div>
            <div className='hidden md:flex items-center space-x-6 text-m text-opacity-90 font-medium '>
                {navLinks.map(link => {
                    return(
                        <div key={link.id}>  
                            <a  className=' text-opacity-90 text-mylight font-medium hover:bg-mylightOpaque py-2 px-4 rounded-lg ' href={link.href}>{link.text}</a>
                        </div>
                    )
                }
                )}
            </div>
            <FaBars className='md:hidden cursor-pointer mr-2 text-xl text-yellow' onClick={()=> setToggle(!toggle)}/>
        </div>
        {toggle && (
            <motion.div initial={{x:400}} animate={{x:0}} className='grid items-center fixed right-0 top-0 h-screen w-[60vw] bg-gradient-to-r from-spacePurple to-spaceBlue  shadow-lg shadow-mylight sm:shadow-none'>
                <div className='flex flex-col gap-6 sm:gap-14 mx-auto'>
                {navLinks.map((link) => {
                    return <NavDrop href={link.href} key={link.id} {...link} setToggle={setToggle}/>; 
                }
                )}
                </div>
                <FaRegWindowClose className="absolute right-4 text-2xl sm:text-3xl top-2 sm:top-6 cursor-pointer text-yellow" onClick={() => setToggle(!toggle)}/>
            </motion.div>
        )

        }

    </div>
  )
}
