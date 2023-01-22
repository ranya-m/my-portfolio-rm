import React, {useState, useEffect, useRef} from 'react';
import { projectCategory } from '../../../data';
import { projects } from '../../../data';
import {motion, AnimatePresence} from 'framer-motion';
import waveLight from "../../../assets/img/wave.png";
import PopUp from "./popUp";

export default function Projects() {
    const [filterImages, setFilterImages] = useState(null);

    useEffect(() => {
        setFilterImages(projects);
    }, []);

    const handleClick = (e) => {
        let btnCategory = e.target.value;
        const newFilterImages = projects.filter(
        (project) => project.value === btnCategory);
        
        btnCategory !== 'all' 
        ? setFilterImages(newFilterImages)
        : setFilterImages(projects);
    };

    const [openPopUp, setOpenPopUp] = useState(false)
    const showPopUp =()=> {
        setOpenPopUp(true);
        console.log(openPopUp);
    }



  return (
    <section className='bg-spaceBlue bg-opacity-70 relative min-h-[165vh] max-h-fit'>
    <div id='projects' className='section pt-[5rem] pb-[9rem]'>
        <div className='mb-8'>
            <h2 className='text-[1.5rem] font-bold text-mylight'>
                My projects
            </h2>
            <div className='w-14 h-1 rounded-sm bg-spaceBlue'></div>  
            <button onClick={showPopUp}>POP UP</button>
            
    {
        openPopUp?
            <div className='popUpContainer absolute bottom-[30%]'>
              <PopUp onClose={() => setOpenPopUp(false)}/>
        </div>
        :null
    } 
        </div>
        <div className='flex flex-wrap gap-8 justify-center'>
            {projectCategory.map((btn) => {
                return(
                    <button key={btn.id} value={btn.value} onClick={handleClick}
                    className='py-1 w-[80px] text-sm text-mydark rounded-2xl bg-mylight bg-opacity-90 hover:bg-spaceBlue
                    hover:text-mylightOpaque
                     hover:shadow-lg hover:shadow-mylightOpaque
                     hover:font-semibold
                     focus:bg-spaceBlue
                    focus:text-mylightOpaque
                    focus:font-semibold'
                    
                    >
                        {btn.name}</button>
                )
            })
            }
        </div>
        
    <AnimatePresence>
        <motion.div className='grid sm:grid-cols-2 md:grid-cols-3 mt-10 gap-3 p-2 lg:mx-20 mb-8'>
            {filterImages && filterImages.map(filterImage=>{
                return(
                    <motion.div
                    
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                    key={filterImage.id}
                    >
                        <motion.img src={filterImage.image} alt="" className='projectImg h-full object-cover drop-shadow-md shadow-mydark rounded-lg cursor-zoom-in '/>
                    </motion.div>
                )
            }
            )}
        </motion.div>
    </AnimatePresence>

    <div className='flex justify-center'>
        <a href='https://github.com/ranya-m?tab=repositories' target='_blank' className="text-[0.9rem] font-medium shadow-lg hover:bg-spaceBlue rounded-full py-2 px-6 hover:text-mylightOpaque bg-mylight bg-opacity-95 text-mydark cursor-pointer">See more projects</a>
    </div>
    
    </div>


   


      {/* wave deco */}
   <img src={waveLight} className=" w-[120%] absolute bottom-[0vh] h-[25vh] sm:h-[25vh]"/>
    </section>
  )
}
